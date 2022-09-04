import { FiShoppingCart } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import { iProduct } from '../../models/product.interface';
import styles from '../../styles/components/common/details.module.scss';
import handleAddToCart from '../../utils/addToCart';
import { getPercentage } from '../../utils/calculations';
import { QuantityPicker, Rating, useEffect, useState } from '../../utils/commonImports';
import getLocalStorage from '../../utils/getLocalStorage';

type IProps = {
    details: iProduct;
};

export default function Details({ details }: IProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToast } = useToasts();
    useEffect(() => {
        const cartItems = getLocalStorage('cartItems', 'array');
        const product = cartItems.find((p: iProduct) => p._id === details._id);
        if (product) {
            setQuantity(product.quantity);
        }
    }, [details._id]);

    return (
        <div className={styles.detailsContainer}>
            {/* first row */}
            <h3>{details?.onSale ? 'On Sale' : 'Sale Off'}</h3>
            {/* second row */}
            <h1>{details?.title}</h1>
            {/* third row */}
            <div className={styles.ratings}>
                <Rating name="read-only" value={4.5} precision={0.1} readOnly />
                <h5>(32 Reviews)</h5>
            </div>
            {/* fourth row */}
            <div className={styles.prices}>
                <h1>${details?.offerPrice}</h1>
                <div className={styles.off}>
                    <h6>{getPercentage(details?.price, details?.offerPrice)}% Off</h6>
                    <del>${details?.price}</del>
                </div>
            </div>
            {/* fifth row */}
            <div className={styles.quantityCart}>
                <QuantityPicker
                    defaultValue={quantity}
                    callback={(v: number) => setQuantity(v)}
                    max={10}
                    className={styles.quantity}
                />
                <button
                    onClick={() => {
                        handleAddToCart(details, quantity);
                        addToast('Product added to cart', {
                            appearance: 'success',
                            autoDismiss: true,
                            autoDismissTimeout: 2000,
                        });
                    }}
                    type="button"
                >
                    <FiShoppingCart />
                    Add to Cart
                </button>
            </div>
            {/* sixth row */}
            <div className={styles.footer}>
                <h6>
                    Vendor: <span>MBeBAZAR</span>
                </h6>
            </div>
        </div>
    );
}
