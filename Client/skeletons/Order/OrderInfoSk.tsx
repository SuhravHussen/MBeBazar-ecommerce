import { Divider, Skeleton } from '@mui/material';
import styles from '../../styles/components/common/invoice/invoice.module.scss';

export default function OrderInfoSk() {
    return (
        <div className={styles.invoiceContainer}>
            <h3>
                <Skeleton animation="wave" />
            </h3>
            <div className={styles.data}>
                <div className={styles.top}>
                    <h1>
                        {' '}
                        <Skeleton animation="wave" />
                    </h1>
                    <div className={styles.right}>
                        <div className={styles.logo}>
                            <Skeleton animation="wave" />
                        </div>
                        <p>
                            {' '}
                            <Skeleton animation="wave" />
                        </p>
                    </div>
                </div>
                <Divider
                    sx={{ bgcolor: 'white' }}
                    style={{
                        border: 'none',
                        height: 1,
                        margin: 0,
                    }}
                />
                <div className={styles.bottom}>
                    <div className={styles.column}>
                        <h5>
                            {' '}
                            <Skeleton animation="wave" />
                        </h5>
                        <p>
                            {' '}
                            <Skeleton animation="wave" />
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h5>
                            {' '}
                            <Skeleton animation="wave" />
                        </h5>
                        <p>
                            {' '}
                            <Skeleton animation="wave" />
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h5>
                            {' '}
                            <Skeleton animation="wave" />
                        </h5>
                        <p>
                            {' '}
                            <Skeleton animation="wave" />
                        </p>
                        <p>
                            {' '}
                            <Skeleton animation="wave" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
