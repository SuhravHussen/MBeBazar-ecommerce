/* eslint-disable react/jsx-no-bind */
import { useEffect, useRef, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import styles from '../../styles/components/common/quantityPicker.module.scss';

export default function QuantityPicker({
    defaultValue = 1,
    max,
    className,
    callback,
}: {
    defaultValue?: number;
    max: number;
    className?: any;
    callback: (number: number) => void;
}) {
    const [quantity, setQuantity] = useState(defaultValue);
    const ref = useRef(false);
    useEffect(() => {
        if (!ref.current) ref.current = true;
        if (ref.current) {
            callback(quantity);
        }
    }, [callback, quantity]);

    // increase value
    function increase() {
        if (quantity !== max) {
            setQuantity((prev) => prev + 1);
        }
    }

    // decrease value
    function decrease() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    return (
        <div className={className}>
            <p className={styles.value}>{quantity}</p>
            <div className={styles.icons}>
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
