import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '../../../styles/components/checkout/summary/summary.module.scss';
import { iCart } from '../../header/middleheader/Cart/CartDrawer';
import SingleProductCart from '../../header/middleheader/Cart/SingleProductCart';

interface iProps {
    products: iCart[];
    shippingMethod: string;
}

export default function OrderSummary({ products, shippingMethod }: iProps) {
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    useEffect(() => {
        let total = 0;
        products.forEach((product) => {
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
    }, [products, shippingMethod]);

    return (
        <div className={styles.summaryDiv}>
            <h3 style={{ textAlign: 'center', margin: '10px' }}>Order Summary</h3>
            <Divider />
            <div className={styles.products}>
                {products?.map((item) => (
                    <SingleProductCart product={item} key={item._id} />
                ))}
            </div>
            <div className={styles.price}>
                <p>Subtotal </p>
                <p>${subTotal}</p>
            </div>
            <div className={styles.price}>
                <p>Shipping Cost </p>
                <p>${shippingCost}</p>
            </div>
            <div className={styles.price}>
                <p>Discount </p>
                <p className={styles.discount}>$0.00</p>
            </div>
            <Divider />
            <div className={styles.totalPrice}>
                <p>Total Cost</p>
                <p>${subTotal + shippingCost}</p>
            </div>
        </div>
    );
}
