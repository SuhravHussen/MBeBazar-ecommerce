import { Dispatch, SetStateAction } from 'react';
import { iCart } from '../components/header/middleheader/Cart/CartDrawer';

const handleQuantity = (n: number, setState: Dispatch<SetStateAction<number>>, id: string) => {
    const updatedProducts = JSON.parse(localStorage.getItem('cartItems') || '[]').map(
        (p: iCart) => {
            if (p._id === id) {
                p.quantity = n;
                p.total = n * p.offerPrice;
                setState(n);
            }
            return p;
        }
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedProducts));
};

export default handleQuantity;
