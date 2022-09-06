/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import { CircularProgress, circularProgressClasses } from '@mui/material';
import styles from '../../../styles/components/common/button/primarybutton.module.scss';

interface iProps {
    text: string;
    icon?: any;
    callback?: () => void;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    style?: {};
}

export default function PrimaryButton({
    text,
    icon = null,
    loading = false,
    callback,
    type = 'button',
    style,
}: iProps) {
    return (
        <button
            style={style}
            disabled={!!loading}
            onClick={callback}
            type={type}
            className={styles.button}
        >
            {loading ? (
                <CircularProgress
                    sx={{
                        color: 'green',
                        animationDuration: '150ms',
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    thickness={5}
                    size={16}
                />
            ) : icon ? (
                `${icon} ${text}`
            ) : (
                text
            )}
        </button>
    );
}
