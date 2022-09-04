import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FiTruck } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineCheck, MdPendingActions } from 'react-icons/md';
import { Order } from '../../../models/order.interface';
import styles from '../../../styles/components/profile/dashboard/dashboard.module.scss';

export default function Dashboard({ orders }: { orders: Order[] }) {
    const [totalOrders, setTotalOrders] = useState(0);
    const [penddingOrders, setPenddingOrders] = useState(0);
    const [processingOrders, setProcessingOrders] = useState(0);
    const [completedOrder, setCompletedOrder] = useState(0);

    useEffect(() => {
        setTotalOrders(orders.length);
        setPenddingOrders(orders.filter((order) => order.bookingInfo.status === 'Pending').length);
        setProcessingOrders(
            orders.filter((order) => order.bookingInfo.status === 'Processing').length
        );
        setCompletedOrder(
            orders.filter((order) => order.bookingInfo.status === 'Delivered').length
        );
    }, [orders]);

    return (
        <div className={styles.dashboard}>
            <h3>Dashboard</h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.leftColumn}>
                        <p className={styles.cartIcon}>
                            <GiShoppingCart />
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <h4>Total Order</h4>
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={totalOrders} />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.leftColumn}>
                        <p className={styles.pendingIcon}>
                            <MdPendingActions />
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <h4>Pending Order</h4>
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={penddingOrders} />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.leftColumn}>
                        <p className={styles.shippingIcon}>
                            <FiTruck />
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <h4>Processing Order</h4>
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={processingOrders} />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.leftColumn}>
                        <p className={styles.checkMarkIcon}>
                            <MdOutlineCheck />
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <h4>Complete Order</h4>
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={completedOrder} />
                    </div>
                </div>
            </div>
        </div>
    );
}
