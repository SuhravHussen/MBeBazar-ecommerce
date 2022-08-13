import styles from '../../../styles/components/Home/dealsOfTheDay/dealsOfTheDay.module.scss';
import { useCountDown } from '../../../utils/customHooks';

export default function Countdown() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const [days, hours, minutes, seconds] = useCountDown(tomorrow);

    return (
        <div className={styles.countDownDiv}>
            <p>
                {days} <span>Days</span>
            </p>
            <p>
                {hours} <span>Hours</span>
            </p>
            <p>
                {minutes} <span>Mins</span>
            </p>
            <p>
                {seconds} <span>Sec</span>
            </p>
        </div>
    );
}
