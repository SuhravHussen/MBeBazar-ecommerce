/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Dispatch, SetStateAction } from 'react';
import styles from '../../../../styles/components/middleNav/cartdrawer.module.scss';
import SingleProductCart from './SingleProductCart';

interface IProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CartDrawer({ open, setOpen }: IProps) {
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
                    {Array(30)
                        .fill(null)
                        .map(() => (
                            <>
                                <SingleProductCart />
                                <Divider />
                            </>
                        ))}
                </div>
                <div className={styles.footer}>
                    <div className={styles.checkout}>
                        <p>Proceed to checkout </p> <h4>$500</h4>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}
