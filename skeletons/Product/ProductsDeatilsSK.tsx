import Skeleton from '@mui/material/Skeleton';
import styles from '../../styles/components/Skeletons/produckDetailsSK.module.scss';

export default function ProductDetailSK() {
    return (
        <div className={styles.slider}>
            <div className={styles.column}>
                <Skeleton variant="rectangular" className={styles.slider1} />
                <div className={styles.thumbnails}>
                    <Skeleton variant="rectangular" className={styles.thumb} />
                    <Skeleton variant="rectangular" className={styles.thumb} />
                    <Skeleton variant="rectangular" className={styles.thumb} />
                </div>
            </div>
            <div className={styles.column}>
                <Skeleton variant="rectangular" className={styles.header} />
                <Skeleton variant="rectangular" className={styles.rating} />
                <Skeleton variant="rectangular" className={styles.price} />
                <Skeleton variant="rectangular" className={styles.quantity} />
                <Skeleton variant="rectangular" className={styles.cart} />
            </div>
        </div>
    );
}
