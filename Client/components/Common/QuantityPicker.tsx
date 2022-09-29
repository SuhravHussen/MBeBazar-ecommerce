/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
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

    // increase value
    function increase() {
        if (quantity !== max) {
            setQuantity((prev) =>{
                callback(prev + 1);
                return prev + 1;
            });
           
        }
    }

    // decrease value
    function decrease() {
        if (quantity > 1) {
            setQuantity((prev) => {
                callback(prev - 1);
                return prev - 1;
            });
          
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
