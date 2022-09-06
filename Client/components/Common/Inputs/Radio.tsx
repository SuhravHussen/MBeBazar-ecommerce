import { Radio } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
    type: string;
    icon?: any;
    required: boolean | string;
    register?: any;
    label: string;
    value: string;
    additionalText?: string;
}

export default function RadioInput({
    type,
    icon,
    required,
    register,
    label,
    value,
    additionalText,
}: IProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #D8D8D8',
                padding: '8px',
                justifyContent: 'center',
                borderRadius: '8px',
            }}
        >
            <p
                style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {icon && icon}
            </p>
            <p
                style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#707070',
                }}
            >
                {label}{' '}
                {additionalText && (
                    <span style={{ fontSize: '12px', fontWeight: 'normal' }}>{additionalText}</span>
                )}
            </p>
            <Radio color="secondary" {...register(type, required)} value={value} />
        </Box>
    );
}
