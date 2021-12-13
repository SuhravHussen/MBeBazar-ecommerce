import styles from '../../../styles/components/common/card/card.module.scss';
import { Fade, FiShoppingCart, Image, Rating } from '../../../utils/commonImports';
import HoverIcons from './HoverIcons';
import { PopularProductsSchema } from './schema';

type iProps = {
    product: PopularProductsSchema;
    index: number;
    setQuickViewDetails: any;
    setModalOpen: any;
};

export default function SingleProduct({
    product,
    index,
    setQuickViewDetails,
    setModalOpen,
}: iProps) {
    return (
        <Fade className={styles.singleProduct} cascade>
            <div>
                {product?.onSale && <span className={styles.onSale}>On Sale</span>}
                <div className={styles.image}>
                    <HoverIcons
                        index={index}
                        setQuickViewDetails={setQuickViewDetails}
                        setModalOpen={setModalOpen}
                    />
                    <Image
                        src={product.image[0]}
                        width={244}
                        height={244}
                        placeholder="blur"
                        blurDataURL="/images/loading-min.jpg"
                    />
                </div>
                <small className={styles.category}>{product.category}</small>
                <h3 className={styles.title}>{product.title}</h3>
                <div style={{ display: 'flex' }}>
                    <Rating name="read-only" value={product.ratings} precision={0.1} readOnly />
                    <span className={styles.reviewsNumber}>(32)</span>
                </div>
                <p>
                    By <span>{product.vendorName}</span>
                </p>
                <div className={styles.bottom}>
                    <h2>${product.offerPrice}</h2>
                    <del>${product.actualPrice}</del>

                    <button type="button" className={styles.button}>
                        <FiShoppingCart /> Add
                    </button>
                </div>
            </div>
        </Fade>
    );
}
