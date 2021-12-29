import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from '../../../../styles/components/middleNav/cartSingleProduct.module.scss';
import { Image, useState } from '../../../../utils/commonImports';
import QuantityPicker from '../../../Common/QuantityPicker';

export default function SingleProductCart() {
    const [productQuantity, setProductQuantity] = useState(1);
    return (
        <div className={styles.singleProduct}>
            <div className={styles.column1}>
                <div className={styles.image}>
                    <Image
                        src="https://res.cloudinary.com/doircnueq/image/upload/v1635596669/MBeCommerece/Products/thumbnail-10_ymxck0.jpg"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL="https://res.cloudinary.com/doircnueq/image/upload/v1635596669/MBeCommerece/Products/thumbnail-10_ymxck0.jpg"
                        alt="Product Image"
                    />
                </div>
            </div>
            <div className={styles.column2}>
                <h5 className={styles.productName}>Organic Purple Cauliflower</h5>
                <small>
                    Item per price <span>$43</span>
                </small>
                <h4>$43.00</h4>
            </div>
            <div className={styles.column3}>
                <QuantityPicker
                    className={styles.quantityPicker}
                    value={productQuantity}
                    setValue={setProductQuantity}
                    max={15}
                />
            </div>
            <div className={styles.column4}>
                <RiDeleteBin6Line style={{ color: 'red' }} />
            </div>
        </div>
    );
}
