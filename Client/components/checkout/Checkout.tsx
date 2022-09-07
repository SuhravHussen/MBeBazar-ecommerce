import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { iUser } from '../../models/user.interface';
import styles from '../../styles/components/checkout/checkout.module.scss';
import getLocalStorage from '../../utils/getLocalStorage';
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
    const {
        handleSubmit,
        control,
        setValue,
        register,
        formState: { errors },
    } = useForm<IFormInputs>();

    const router = useRouter();
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

    const onSubmit = (d: IFormInputs) => {
        console.log(d);
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.details}>
                <form style={{ width: '60%' }} onSubmit={handleSubmit(onSubmit)}>
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
                    <OrderSummary products={cart} shippingMethod={shippingMethod} />
                </div>
            </div>
        </div>
    );
}
