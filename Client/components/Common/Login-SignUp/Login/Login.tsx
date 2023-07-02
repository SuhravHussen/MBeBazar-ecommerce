import { Alert } from '@mui/material';
import { getSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import styles from '../../../../styles/components/common/login-signUp/login.module.scss';
import PrimaryButton from '../../Button/PrimaryButton';
import InputBox from '../../Inputs/InputBox';
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
            const response = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
            if (response?.ok) {
                const session: any = await getSession();
                if (session?.user) {
                    // saving data in layout js
                    handleModalClose();
                } else {
                    setError('Invalid Credentials or something went wrong!');
                }
            } else {
                setError(' something went wrong!');
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setSpinner(false);

            const reloadSession = () => {
                const event = new Event('visibilitychange');
                document.dispatchEvent(event);
            };
            reloadSession();
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
                    <PrimaryButton text="login" loading={showSpinner} type="submit" />
                </div>
            </form>
            <h3>OR</h3>

            <OtherLogins screen="login" handleScreen={() => handleScreen(false)} />
        </div>
    );
}
