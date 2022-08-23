import { Alert, CircularProgress, circularProgressClasses } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import styles from '../../../../styles/components/common/login-signUp/login.module.scss';
import InputBox from '../InputBox';
import OtherLogins from '../OtherLogins';

interface IFormInputs {
    email: string;
    password: string;
}

export default function Login({
    handleScreen,
    handleModalClose,
}: {
    handleScreen: any;
    handleModalClose: () => void;
}) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormInputs>();
    const [showSpinner, setSpinner] = useState(false);
    const [authError, setError] = useState('');

    const onSubmit = async (data: any) => {
        setSpinner(true);
        setError('');
        try {
            const resData = await fetch(`${process.env.BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: data.email.trim(),
                    password: data.password,
                }),
            }).then((res) => res.json());
            if (resData.error) {
                setError(resData.message);
            } else {
                localStorage.setItem('user', JSON.stringify(resData.data.user));
                console.log(resData);
                handleModalClose();
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setSpinner(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1>
            <p>Login with your email and password</p>
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
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
                        icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
                        validation={(v: any) => {
                            const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                            return reg.test(v);
                        }}
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
                            ' Login'
                        )}
                    </button>
                </div>
            </form>
            <h3>OR</h3>

            <OtherLogins screen="login" handleScreen={() => handleScreen(false)} />
        </div>
    );
}
