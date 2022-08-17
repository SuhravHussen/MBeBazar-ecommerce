/* eslint-disable react/jsx-no-bind */
import { BiMinus, BiPlus } from 'react-icons/bi';
import styles from '../../styles/components/common/quantityPicker.module.scss';

export default function QuantityPicker({
    value,
    setValue,
    max,
    className,
}: {
    value: number;
    max: number;
    setValue: any;
    className: any;
}) {
    // increase value
    function increase() {
        if (value !== max) {
            setValue(value + 1);
        }
    }

    // decrease value
    function decrease() {
        if (value > 1) {
            setValue(value - 1);
        }
    }

    return (
        <div className={className}>
            <p className={styles.value}>{value}</p>
            <div>
                <button className={styles.button} type="button">
                    <BiPlus onClick={increase} className={styles.arrow} />
                </button>
                <button className={styles.button} type="button">
                    <BiMinus onClick={decrease} className={styles.arrow} />
                </button>
            </div>
        </div>
    );
}
