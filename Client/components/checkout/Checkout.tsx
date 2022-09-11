import { Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { iUser } from '../../models/user.interface';
import styles from '../../styles/components/checkout/checkout.module.scss';
import getLocalStorage from '../../utils/getLocalStorage';
import getStripe from '../../utils/getStripe';
import PrimaryButton from '../Common/Button/PrimaryButton';
import { iCart } from '../header/middleheader/Cart/CartDrawer';
import PaymentDetails from './paymentDetails';
import PersonalDetails from './personalDetails';
import ShippingDetails from './shippingDetails';
import OrderSummary from './summary/OrderSummary';

export interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    'street address': string;
    city: string;
    shippingMethod: 'Sundarban' | 'RedX' | 'Paperfly';
    paymentMethod: 'COD' | 'CreditCard';
}

export default function Checkout() {
    const [cart, setCart] = useState<iCart[]>([]);
    const [user, setUser] = useState<iUser>({} as iUser);
    const [shippingMethod, setShippingMethod] = useState('Sundarban');
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [error, setError] = useState(false);
    const {
        handleSubmit,
        control,
        setValue,
        register,
        formState: { errors },
    } = useForm<IFormInputs>();

    const router = useRouter();
    useEffect(() => {
        let total = 0;
        cart.forEach((product) => {
            total += product.total;
        });
        setSubTotal(total);

        if (shippingMethod === 'Sundarban') {
            setShippingCost(2);
        } else if (shippingMethod === 'RedX') {
            setShippingCost(10);
        } else if (shippingMethod === 'Paperfly') {
            setShippingCost(5);
        }
    }, [cart, shippingMethod]);

    useEffect(() => {
        const cartItems = getLocalStorage('cartItems', 'array');
        const userData = getLocalStorage('user', 'object');
        if (cartItems.length > 0) {
            setCart(cartItems);
            setUser(userData);
        } else {
            router.replace('/');
        }
        if (userData.name) setValue('name', userData.name);
        if (userData.email) setValue('email', userData.email);
        if (userData.phone) setValue('phone', userData.phone);
        // if (userData.address) setValue('address', userData.address);
    }, [router, setValue]);

    const stripePromise = getStripe();

    const createCheckOutSession = async (
        items: {
            price_data: {
                currency: string;
                unit_amount: number;
                product_data: {
                    name: string;
                    description: string;
                    images: string[];
                };
            };
            quantity: any;
        }[],
        orderInfo: any
    ) => {
        const stripe = await stripePromise;

        const checkoutSession = await fetch(`${process.env.BASE_URL}/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                item: items,
                orderInfo,
            }),
        }).then((res) => res.json());

        if (checkoutSession.error) {
            setError(true);
        } else {
            const result = await stripe.redirectToCheckout({
                sessionId: checkoutSession.id,
            });

            if (result.error) {
                setError(true);
            }
        }
    };
    const onSubmit = (d: IFormInputs) => {
        setError(false);
        console.log(d);
        const items = cart.map((item) => ({
            price_data: {
                currency: 'usd',
                unit_amount: item.total * 100,
                product_data: {
                    name: item.title,
                    description: item.details,
                    images: [...item.images],
                    metadata: {
                        id: item._id,
                        quantity: item.quantity,
                        price: item.total,
                    },
                },
            },

            quantity: item.quantity,
        }));

        const orderInfo = {
            bookingInfo: {
                name: d.name,
                address: `${d['street address']}, ${d.city}`,
                phone: d.phone,
                totalPrice: Number((subTotal + shippingCost).toFixed(2)),
                shippingMethod: d.shippingMethod,
                paymentMethod: d.paymentMethod,
                shippingPrice: shippingCost,
                status: 'pending',
                payment: 'pending',
            },
        };
        createCheckOutSession(items, orderInfo);
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.details}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <PersonalDetails user={user} errors={errors} control={control} />
                    <ShippingDetails
                        register={register}
                        errors={errors}
                        control={control}
                        user={user}
                        setShippingMethod={setShippingMethod}
                    />
                    <PaymentDetails register={register} />
                    <PrimaryButton type="submit" style={{ width: '100%' }} text="Confirm" />
                </form>
                <div className={styles.summary}>
                    <OrderSummary
                        products={cart}
                        totalPrice={subTotal + shippingCost}
                        shippingCost={shippingCost}
                    />
                </div>
            </div>
            <Alert
                severity="error"
                sx={{
                    display: error ? 'flex' : 'none',
                    margin: '1rem',
                }}
            >
                Something went wrong. Please try again later.{' '}
            </Alert>
        </div>
    );
}
