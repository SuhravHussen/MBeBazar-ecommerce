import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
        ) as Promise<Stripe>;
    }
    return stripePromise;
};

export default getStripe;
