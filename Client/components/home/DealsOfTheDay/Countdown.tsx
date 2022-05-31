import styles from '../../../styles/components/Home/dealsOfTheDay/dealsOfTheDay.module.scss';
import { useCountDown } from '../../../utils/customHooks';

export default function Countdown() {
    const [days, hours, minutes, seconds] = useCountDown(new Date('May 30 2023 00:00:00'));

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
