import { iProduct } from '../../../models/product.interface';
import ProductDetailSK from '../../../skeletons/Product/ProductsDeatilsSK';
import styles from '../../../styles/components/products/productdetails.module.scss';
import { useState } from '../../../utils/commonImports';
import Details from '../../Common/Details';
import SlideView from './SlideView';

export default function ProductDetails({ product }: { product: iProduct }) {
    const [cartValue, setCartValue] = useState(1);
    const [loading] = useState(false);

    return (
        <div className={styles.productDetailsContainer}>
            {!loading && (
                <>
                    <div className={`${styles.slide} product-details-slider`}>
                        <SlideView images={product.images} />
                    </div>
                    <div className={styles.details}>
                        <Details
                            value={cartValue}
                            setValue={setCartValue}
                            details={{
                                title: product?.title,
                                onSale: product?.onSale,
                                vendorName: 'MBeBazar',
                                actualPrice: product?.price,
                                offerPrice: product?.offerPrice,
                                id: product?._id,
                                ratings: 4.5,
                                image: product?.images,
                                category: product?.category,
                            }}
                        />
                    </div>
                </>
            )}
            {loading && <ProductDetailSK />}
        </div>
    );
}
