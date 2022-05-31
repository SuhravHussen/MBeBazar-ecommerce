import ProductDetailSK from '../../../skeletons/Product/ProductsDeatilsSK';
import styles from '../../../styles/components/products/productdetails.module.scss';
import { useState } from '../../../utils/commonImports';
import Details from '../../Common/Details';
import SlideView from './SlideView';

export default function ProductDetails() {
    const [cartValue, setCartValue] = useState(1);
    const [loading] = useState(false);
    return (
        <div className={styles.productDetailsContainer}>
            {!loading && (
                <>
                    <div className={`${styles.slide} product-details-slider`}>
                        <SlideView />
                    </div>
                    <div className={styles.details}>
                        <Details
                            value={cartValue}
                            setValue={setCartValue}
                            details={{
                                title: 'et fugit quas eum in in aperiam quod',
                                onSale: true,
                                vendorName: 'NestStore',
                                actualPrice: 54,
                                offerPrice: 44,
                                id: '3454454',
                                ratings: 3.5,
                                image: [
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596669/MBeCommerece/Products/thumbnail-8_ulpjbv.jpg',
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/seedOfChangeOrganicQuinoe_oodn92.jpg',
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-10-1_goxpvv.jpg',
                                ],
                                category: 'Juice',
                            }}
                        />
                    </div>
                </>
            )}
            {loading && <ProductDetailSK />}
        </div>
    );
}
