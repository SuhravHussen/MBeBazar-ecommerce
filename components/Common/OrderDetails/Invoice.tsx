import { Divider } from '@mui/material';
import styles from '../../../styles/components/common/invoice/invoice.module.scss';
import { Image } from '../../../utils/commonImports';

export default function Invoice() {
    return (
        <div className={styles.invoiceContainer}>
            <h3>
                <span>Thank you! </span> Your order have been received
            </h3>
            <div className={styles.data}>
                <div className={styles.top}>
                    <h1>INVOICE</h1>{' '}
                    <div className={styles.right}>
                        <div className={styles.logo}>
                            <Image
                                src="/images/logos/nestLogo.svg"
                                height={50}
                                width={110}
                                placeholder="blur"
                                blurDataURL="/images/logos/nestLogo.svg"
                            />
                        </div>
                        <p>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
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
                        <h5>Date</h5>
                        <p>December 18, 2021</p>
                    </div>
                    <div className={styles.column}>
                        <h5>INVOICE NO.</h5>
                        <p>#1343434</p>
                    </div>
                    <div className={styles.column}>
                        <h5>INVOICE TO.</h5>
                        <p>Farhan Ahmed Nahid</p>
                        <p>Mirpur, Dhaka Dhaka, Bangladesh, asds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
