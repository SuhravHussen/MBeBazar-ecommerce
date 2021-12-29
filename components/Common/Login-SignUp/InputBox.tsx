import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Dispatch, SetStateAction, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

interface IProps {
    setValue: Dispatch<SetStateAction<string>>;
    error: boolean;
    placeholder: string;
    icon: any;
    type: string;
    showEye?: boolean;
    helperText?: string;
}

export default function InputBox({
    setValue,
    error,
    placeholder,
    icon,
    type,
    showEye = false,
    helperText = '',
}: IProps) {
    const [showPass, setShowPass] = useState('password');

    console.log(error, 'error', 'showWye', showEye);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '14px', color: 'grey' }}>{type}</p>
            <TextField
                type={!showEye ? type : showPass}
                onChange={(e) => setValue(e.target.value)}
                error={error}
                color="secondary"
                placeholder={placeholder}
                helperText={error ? <p style={{ marginLeft: '-14px' }}>{helperText}</p> : ''}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                    // eslint-disable-next-line no-nested-ternary
                    endAdornment: showEye ? (
                        showPass === 'password' ? (
                            <VscEye
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                }}
                                onClick={() => setShowPass('text')}
                            />
                        ) : (
                            <VscEyeClosed
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                }}
                                onClick={() => setShowPass('password')}
                            />
                        )
                    ) : (
                        ''
                    ),
                }}
            >
                <p>hello</p>
            </TextField>
        </Box>
    );
}
