import CountUp from 'react-countup';
import { FiTruck } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineCheck, MdPendingActions } from 'react-icons/md';
import styles from '../../../styles/components/profile/dashboard/dashboard.module.scss';

export default function Dashboard() {
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
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={53} />
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
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={20} />
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
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={10} />
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
                        <CountUp style={{ fontWeight: 700 }} duration={2} end={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}
