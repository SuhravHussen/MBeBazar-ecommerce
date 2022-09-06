import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

interface IProps {
    error: boolean;
    placeholder: string;
    icon?: any;
    type: string;
    showEye?: boolean;
    helperText?: string;
    control: any;
    validation?: (v: any) => boolean;
    required: boolean | string;
    defaultValue?: string | null;
}

export default function InputBox({
    error,
    placeholder,
    icon,
    type,
    showEye = false,
    helperText = '',
    control,
    required,
    validation,
    defaultValue,
}: IProps) {
    const [showPass, setShowPass] = useState('password');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '14px', color: 'grey' }}>{type}</p>

            <Controller
                control={control && control}
                name={type}
                defaultValue={defaultValue || undefined}
                rules={{
                    required,
                    validate: validation,
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        type={!showEye ? type : showPass}
                        error={error}
                        color="secondary"
                        placeholder={placeholder}
                        defaultValue={defaultValue || undefined}
                        helperText={
                            error ? <p style={{ marginLeft: '-14px' }}>{helperText}</p> : ''
                        }
                        InputProps={{
                            startAdornment: icon ? (
                                <InputAdornment position="start">{icon}</InputAdornment>
                            ) : (
                                ''
                            ),
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
                )}
            />
        </Box>
    );
}
