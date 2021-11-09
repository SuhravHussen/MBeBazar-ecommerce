import { Divider } from '@mui/material';
import Link from 'next/link';
import styles from '../../../styles/components/topNav/topheader.module.scss';

export default function Topheader() {
    return (
        <>
            <div className={styles.topHeaderContainer}>
                <div className={styles.leftSide}>
                    <Link href="/">
                        <h6> About Us</h6>
                    </Link>

                    <Link href="/">
                        <h6 className={styles.borderStyle}>My Account</h6>
                    </Link>

                    <Link href="/">
                        <h6 className={styles.borderStyle}>Wishlist</h6>
                    </Link>

                    <Link href="/">
                        <h6 className={styles.borderStyle}>Order Tracking</h6>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <h6>
                        Need help? Call Us: <span>+1800900</span>
                    </h6>
                    <h6>message us</h6>
                </div>
            </div>
            <Divider />
        </>
    );
}
