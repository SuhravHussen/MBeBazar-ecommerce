import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import styles from '../../../../styles/components/common/login-signUp/sign-up.module.scss';
import { useState } from '../../../../utils/commonImports';
import InputBox from '../InputBox';
import OtherLogins from '../OtherLogins';

export default function SignUp({ handleScreen }: { handleScreen: any }) {
    const [, setEmail] = useState('');
    const [emailError] = useState(false);
    const [, setPassword] = useState('');
    const [passError] = useState(false);
    const [, setName] = useState('');
    const [nameError] = useState(false);
    return (
        <div className={styles.signUpContainer}>
            <h1>Sign up</h1>
            <p>Register with email and password</p>
            <div className={styles.form}>
                <InputBox
                    placeholder="your name"
                    setValue={setName}
                    error={nameError}
                    type="Name"
                    helperText="Please input a valid email!"
                    icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
                />
                <InputBox
                    placeholder="example@giailbox.com"
                    setValue={setEmail}
                    error={emailError}
                    type="Email"
                    helperText="Please input a valid email!"
                    icon={<AiOutlineMail style={{ fontSize: '18px' }} />}
                />
                <InputBox
                    showEye
                    placeholder="your password"
                    setValue={setPassword}
                    error={passError}
                    helperText="Input a valid password"
                    type="password"
                    icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
                />
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </div>
            <h3>OR</h3>
            <OtherLogins screen="sign-up" handleScreen={() => handleScreen(true)} />
        </div>
    );
}
