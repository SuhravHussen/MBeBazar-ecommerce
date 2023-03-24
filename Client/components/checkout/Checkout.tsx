import { Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { iUser } from '../../models/user.interface';
import { useAddOrderMutation } from '../../Redux/services/Order/services';
import { order } from '../../Redux/services/types/orderResType';
import { selectCartItems } from '../../Redux/Slices/cartSlice';
import { selectUser } from '../../Redux/Slices/userSlice';
import styles from '../../styles/components/checkout/checkout.module.scss';

import logeOut from '../../utils/handleLogout';
import localStorageManager from '../../utils/localstorageManager';
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
    const [shippingMethod, setShippingMethod] = useState('Sundarban');
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const cart: iCart[] = useSelector(selectCartItems);
    const userData = useSelector(selectUser);

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
        if (userData?.name) setValue('name', userData.name);
        if (userData?.email) setValue('email', userData.email);
        if (userData?.phone) setValue('phone', userData.phone);
        // if (userData.address) setValue('address', userData.address);
    }, [setValue, userData]);

    const [addOrder, { isError }] = useAddOrderMutation();

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
        try {
            const jwt = localStorageManager('jwt-token');
            const refreshToken = localStorageManager('refresh-token');
            const tokens = {
                'jwt-token': jwt,
                'refresh-token': refreshToken,
            };

            const checkoutSession = await fetch(`${process.env.BASE_URL}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    item: items,
                    orderInfo,
                    tokens,
                }),
            }).then((res) => res.json());

            console.log(checkoutSession);

            if (checkoutSession.error) {
                setError(true);
            } else {
                window.location.href = checkoutSession.payment.url;
            }
            if (checkoutSession.tokenChanged) {
                localStorageManager('jwt-token', checkoutSession?.tokens.token);
                localStorageManager('refresh-token', checkoutSession?.tokens.refreshToken);
            }
        } catch (err) {
            setError(true);
            logeOut();
            router.replace('/');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isError) {
            setError(true);
        }
    }, [isError]);

    // submit order
    const onSubmit = async (d: IFormInputs) => {
        setLoading(true);
        setError(false);
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
                payment: 'success',
            },
        };
        if (d.paymentMethod === 'CreditCard') {
            createCheckOutSession(items, orderInfo);
        } else {
            const orderedItems = cart.map((item) => ({
                product: item._id,
                quantity: item.quantity,
                price: item.total,
            }));
            const jwt = localStorageManager('jwt-token');
            const refreshToken = localStorageManager('refresh-token');
            const bookingData: order = {
                ...orderInfo,
                items: orderedItems,
                user: userData?._id,
                tokens: {
                    'jwt-token': jwt,
                    'refresh-token': refreshToken,
                },
            } as order;
            bookingData.bookingInfo.payment = 'pending';
            const res = await addOrder(bookingData)
                .unwrap()
                .finally(() => setLoading(false));

            if (!res.error) {
                router.push('/success');
            } else {
                setError(true);
            }
        }
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.details}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <PersonalDetails user={userData as iUser} errors={errors} control={control} />
                    <ShippingDetails
                        register={register}
                        errors={errors}
                        control={control}
                        user={userData as iUser}
                        setShippingMethod={setShippingMethod}
                    />
                    <PaymentDetails register={register} />
                    <PrimaryButton
                        loading={loading}
                        type="submit"
                        style={{ width: '100%' }}
                        text="Confirm"
                    />
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
