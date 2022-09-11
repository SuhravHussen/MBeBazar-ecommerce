import { Divider } from '@mui/material';
import styles from '../../../styles/components/checkout/summary/summary.module.scss';
import { iCart } from '../../header/middleheader/Cart/CartDrawer';
import SingleProductCart from '../../header/middleheader/Cart/SingleProductCart';

interface iProps {
    products: iCart[];
    totalPrice: number;
    shippingCost: number;
}

export default function OrderSummary({ products, totalPrice, shippingCost }: iProps) {
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
                <p>${(totalPrice - shippingCost).toFixed(2)}</p>
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
                <p>${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
}
