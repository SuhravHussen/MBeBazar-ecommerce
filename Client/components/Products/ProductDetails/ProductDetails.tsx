import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/products/productdetails.module.scss';
import Details from '../../Common/Details';
import SlideView from './SlideView';

export default function ProductDetails({ product }: { product: iProduct }) {
    return (
        <div className={styles.productDetailsContainer}>
            <>
                <div className={`${styles.slide} product-details-slider`}>
                    <SlideView images={product.images} />
                </div>
                <div className={styles.details}>
                    <Details details={product} />
                </div>
            </>
        </div>
    );
}
