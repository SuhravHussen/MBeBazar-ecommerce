import Marquee from 'react-fast-marquee';
import styles from '../../../styles/components/announcement.module.scss';

const Announce = () => (
    <div className={styles.announceContainer}>
        <Marquee gradient={false}>Grand opening, up to 15% off all items, Only 3 days left</Marquee>
    </div>
);

export default Announce;
