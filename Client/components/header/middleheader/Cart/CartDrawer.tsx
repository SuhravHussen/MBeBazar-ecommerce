/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { iProduct } from '../../../../models/product.interface';
import styles from '../../../../styles/components/middleNav/cartdrawer.module.scss';
import SingleProductCart from './SingleProductCart';

export interface iCart extends iProduct {
    quantity: number;
    total: number;
}

interface IProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    cart: iCart[];
}

export default function CartDrawer({ open, setOpen, cart }: IProps) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((item: iCart) => {
            totalPrice += item.total;
        });
        setTotal(totalPrice);
    }, [cart]);

    return (
        <Drawer hideBackdrop elevation={2} anchor="right" open={open}>
            <div className={styles.cartDrawerContainer}>
                <div className={styles.header}>
                    <h3>
                        <ShoppingBasketOutlinedIcon fontSize="medium" />

                        <span>Shopping Cart</span>
                    </h3>
                    <p role="button" tabIndex={0} onClick={() => setOpen(false)}>
                        <CloseOutlinedIcon fontSize="small" />

                        <span>Close</span>
                    </p>
                </div>
                <div className={styles.allProducts}>
                    {cart.map((p: iCart) => (
                        <Fragment key={p._id}>
                            <SingleProductCart product={p} />
                            <Divider />
                        </Fragment>
                    ))}
                </div>
                <div className={styles.footer}>
                    <div className={styles.checkout}>
                        <p>Proceed to checkout </p> <h4>${total}</h4>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}
