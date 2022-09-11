import { Alert, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { Order } from '../../../models/order.interface';
import { iProduct } from '../../../models/product.interface';
import OrderInfoSk from '../../../skeletons/Order/OrderInfoSk';
import styles from '../../../styles/components/common/invoice/invoice.module.scss';
import { Image, useEffect, useState } from '../../../utils/commonImports';
import OrderItems from './OrderItems';

export default function Invoice() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState<Order<iProduct>>({} as Order<iProduct>);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchOrderInfo = async () => {
            try {
                const resData = await fetch(`${process.env.BASE_URL}/order/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                }).then((res) => res.json());

                if (resData.error) setError(true);
                else {
                    setOrder(resData.data);
                    setError(false);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchOrderInfo();
    }, [id]);

    return (
        <>
            {!loading && !error && Object.keys(order).length > 0 && (
                <>
                    <div className={styles.invoiceContainer}>
                        <h3>
                            <span>Thank you! </span> Your order is {order?.bookingInfo?.status}
                        </h3>
                        <div className={styles.data}>
                            <div className={styles.top}>
                                <h1>INVOICE</h1>{' '}
                                <div className={styles.right}>
                                    <div className={styles.logo}>
                                        <Image
                                            src="/images/logos/MBeBAZAR.png"
                                            height={50}
                                            width={110}
                                            placeholder="blur"
                                            blurDataURL="/images/logos/MBeBAZAR.png"
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
                                    <p>{new Date(order?.createdAt as string).toString()}</p>
                                </div>
                                <div className={styles.column}>
                                    <h5>INVOICE NO.</h5>
                                    <p>{order?._id}</p>
                                </div>
                                <div className={styles.column}>
                                    <h5>INVOICE TO.</h5>
                                    <p>{order?.bookingInfo?.name}</p>
                                    <p>{order?.bookingInfo?.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <OrderItems order={order} />
                </>
            )}
            {loading && !error && <OrderInfoSk />}
            {error && !loading && Object.keys(order).length === 0 && (
                <Alert severity="error">Sorry, Something went wrong!</Alert>
            )}
        </>
    );
}
