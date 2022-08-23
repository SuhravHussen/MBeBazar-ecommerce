import { Alert, CircularProgress, circularProgressClasses } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';
import styles from '../../../../styles/components/common/login-signUp/sign-up.module.scss';
import InputBox from '../InputBox';
import OtherLogins from '../OtherLogins';

interface IFormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignUp({ handleScreen }: { handleScreen: any }) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormInputs>();
    const [showSpinner, setSpinner] = useState(false);
    const [authError, setError] = useState('');
    const { addToast } = useToasts();
    const onSubmit = async (data: any) => {
        setSpinner(true);
        try {
            setError('');
            if (!errors.name && !errors.email && !errors.password) {
                const res = await fetch(`${process.env.BASE_URL}/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data.name.trim(),
                        email: data.email.trim(),
                        password: data.password,
                    }),
                });

                const resData = await res.json();
                if (resData.error) {
                    setError(resData.message);
                } else {
                    addToast('account created successfully', {
                        appearance: 'success',
                    });
                    handleScreen(true);
                }
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setSpinner(false);
        }
    };

    return (
        <div className={styles.signUpContainer}>
            <h1>Sign up</h1>
            <p>Register with email and password</p>
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                    <InputBox
                        required="Valid name is required"
                        control={control}
                        placeholder="your name"
                        error={!!errors.name}
                        type="name"
                        helperText="Please input a valid name"
                        icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
                        validation={(v: any) => v.trim().length > 3}
                    />

                    <InputBox
                        required
                        control={control}
                        placeholder="example@giailbox.com"
                        error={!!errors.email}
                        type="email"
                        validation={(v: any) => {
                            const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
                            return reg.test(v);
                        }}
                        helperText="Please input a valid email!"
                        icon={<AiOutlineMail style={{ fontSize: '18px' }} />}
                    />
                    <InputBox
                        required
                        control={control}
                        showEye
                        placeholder="your password"
                        error={!!errors.password}
                        helperText="Input a valid password"
                        type="password"
                        validation={(v: any) => {
                            const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                            return reg.test(v);
                        }}
                        icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
                    />
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <button disabled={showSpinner} type="submit" className={styles.button}>
                        {showSpinner ? (
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
                        ) : (
                            ' Sign up'
                        )}
                    </button>
                </div>
            </form>
            <h3>OR</h3>
            <OtherLogins screen="sign-up" handleScreen={() => handleScreen(true)} />
        </div>
    );
}
