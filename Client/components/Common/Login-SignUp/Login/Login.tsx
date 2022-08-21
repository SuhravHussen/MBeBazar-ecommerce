import styles from '../../../../styles/components/common/login-signUp/login.module.scss';
import { useState } from '../../../../utils/commonImports';
import OtherLogins from '../OtherLogins';

export default function Login({ handleScreen }: { handleScreen: any }) {
    const [, setEmail] = useState('');
    const [emailError] = useState(false);
    const [, setPassword] = useState('');
    const [passError] = useState(false);

    return (
        <div className={styles.loginContainer}>
            <h1>Login</h1>
            <p>Login with your email and password</p>
            <div className={styles.form}>
                {/* <InputBox
                    placeholder="example@giailbox.com"
                    setValue={setEmail}
                    error={emailError}
                    type="Email"
                    helperText="Please input a valid email!"
                    icon={<AiOutlineMail style={{ fontSize: '18px' }} />}
                /> */}
                {/* <InputBox
                    showEye
                    placeholder="your password"
                    setValue={setPassword}
                    error={passError}
                    helperText="Input a valid password"
                    type="password"
                    icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
                /> */}
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </div>
            <h3>OR</h3>
            <OtherLogins screen="login" handleScreen={() => handleScreen(false)} />
        </div>
    );
}
