import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../Redux/Slices/cartSlice';
import styles from '../../../../styles/components/middleNav/cartSingleProduct.module.scss';
import { Image, useState } from '../../../../utils/commonImports';
import getLocalStorage from '../../../../utils/getLocalStorage';
import handleQuantity from '../../../../utils/quantityHandler';
import QuantityPicker from '../../../Common/QuantityPicker';
import { iCart } from './CartDrawer';

export default function SingleProductCart({ product }: { product: iCart }) {
  const [quantity, setProductQuantity] = useState(product.quantity);

  const dispatch = useDispatch();

  return (
    <div className={styles.singleProduct}>
      <div className={styles.column1}>
        <div className={styles.image}>
          <Image src={product.images[0]} layout="fill" placeholder="blur" blurDataURL={product.images[0]} alt={product.title} />
        </div>
      </div>
      <div className={styles.column2}>
        <h5 className={styles.productName}>{product.title}</h5>
        <small>
          Item per price <span>${product.offerPrice}</span>
        </small>
        <h4>${product?.total}</h4>
      </div>
      <div className={styles.column3}>
        <QuantityPicker
          defaultValue={quantity}
          className={styles.quantityPicker}
          max={15}
          callback={value => handleQuantity(value, setProductQuantity, product._id)}
        />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          const cartItems = getLocalStorage('cartItems', 'array');
          const newCartItems = cartItems.filter((p: iCart) => p._id !== product._id);
          localStorage.setItem('cartItems', JSON.stringify(newCartItems));
          dispatch(removeFromCart(newCartItems));
        }}
        className={styles.column4}
      >
        <RiDeleteBin6Line style={{ color: 'red', cursor: 'pointer' }} />
      </div>
    </div>
  );
}
