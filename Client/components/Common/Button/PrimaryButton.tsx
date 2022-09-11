/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import { CircularProgress, circularProgressClasses } from '@mui/material';
import styles from '../../../styles/components/common/button/primarybutton.module.scss';

interface iProps {
    text: string;
    icon?: any;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    style?: {};
    onClick?: () => void;
}

export default function PrimaryButton({
    text,
    icon = null,
    loading = false,
    type = 'button',
    style,
    onClick,
}: iProps) {
    return (
        <button
            style={style}
            disabled={!!loading}
            type={type}
            className={styles.button}
            onClick={onClick}
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
