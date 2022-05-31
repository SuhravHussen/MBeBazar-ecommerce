import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
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
        if (value > 0) {
            setValue(value - 1);
        }
    }

    return (
        <div className={className}>
            <p className={styles.value}>{value}</p>
            <div>
                <span onClick={increase} role="button" tabIndex={0}>
                    <BiUpArrow />
                </span>
                <span onClick={decrease} role="button" tabIndex={0}>
                    <BiDownArrow />
                </span>
            </div>
        </div>
    );
}
