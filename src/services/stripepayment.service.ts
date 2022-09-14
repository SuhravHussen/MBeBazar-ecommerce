import { Order } from './../interfaces/order.interface';
import { STRIPE_SECRET_KEY } from '@/config';

const stripe = require('stripe')(STRIPE_SECRET_KEY);

class paymentService {
  public async makePayment(item, orderInfo, userID): Promise<any> {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [...item],
      mode: 'payment',
      success_url: `${process.env.ORIGIN}/success`,
      cancel_url: `${process.env.ORIGIN}/cancel`,
      metadata: {
        bookingInfo: JSON.stringify(orderInfo),
        userID: userID,
      },
    });
    return session;
  }

  public async webhook(payload, sig, endpointsecret): Promise<Order | undefined> {
    try {
      const event = stripe.webhooks.constructEvent(payload, sig, endpointsecret);
      let id;

      if (event.type === 'checkout.session.completed') {
        id = event.data.object.id;
        const session = await stripe.checkout.sessions.retrieve(id);
        const lineItems = await stripe.checkout.sessions.listLineItems(id, {
          expand: ['data.price.product'],
        });

        const bookingInfo = JSON.parse(session?.metadata?.bookingInfo);
        const userID = session?.metadata?.userID;
        const itemsInfo = lineItems?.data.map(item => {
          return {
            product: item?.price?.product?.metadata?.id,
            price: item?.price?.product?.metadata?.price,
            quantity: item?.price?.product?.metadata?.quantity,
          };
        });
        const orderInfo = {
          ...bookingInfo,
          items: itemsInfo,
          user: userID,
        };

        return orderInfo;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default paymentService;
