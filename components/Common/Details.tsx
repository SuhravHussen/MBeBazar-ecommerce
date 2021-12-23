import { FiShoppingCart } from 'react-icons/fi';
import styles from '../../styles/components/common/details.module.scss';
import { getPercentage } from '../../utils/calculations';
import { QuantityPicker, Rating } from '../../utils/commonImports';
import { ProductsSchema } from './Card/schema';

type IProps = {
    details: ProductsSchema;
    value: number;
    setValue: any;
};

export default function Details({ details, value, setValue }: IProps) {
    return (
        <div className={styles.detailsContainer}>
            {/* first row */}
            <h3>{details?.onSale ? 'On Sale' : 'Sale Off'}</h3>
            {/* second row */}
            <h1>{details?.title}</h1>
            {/* third row */}
            <div className={styles.ratings}>
                <Rating name="read-only" value={details?.ratings} precision={0.1} readOnly />
                <h5>(32 Reviews)</h5>
            </div>
            {/* fourth row */}
            <div className={styles.prices}>
                <h1>${details?.offerPrice}</h1>
                <div className={styles.off}>
                    <h6>{getPercentage(details?.actualPrice, details?.offerPrice)}% Off</h6>
                    <del>${details?.actualPrice}</del>
                </div>
            </div>
            {/* fifth row */}
            <div className={styles.quantityCart}>
                <QuantityPicker
                    value={value}
                    setValue={setValue}
                    max={10}
                    className={styles.quantity}
                />
                <button type="button">
                    <FiShoppingCart />
                    Add to Cart
                </button>
            </div>
            {/* sixth row */}
            <div className={styles.footer}>
                <h6>
                    Vendor: <span>{details?.vendorName}</span>
                </h6>
            </div>
        </div>
    );
}
