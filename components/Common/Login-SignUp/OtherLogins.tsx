import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import styles from '../../../styles/components/common/login-signUp/otherlogin.module.scss';

export default function OtherLogins({
    handleScreen,
    screen,
}: {
    handleScreen: any;
    screen: string;
}) {
    return (
        <div className={styles.moreLogin}>
            <div className={styles.otherLogins}>
                <button className={styles.facebook} type="button">
                    <FaFacebookF /> <span>Login With Facebook</span>
                </button>
                <button className={styles.google} type="button">
                    <FcGoogle /> <span>Login With Facebook</span>
                </button>
            </div>
            <p>
                {screen === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <span role="button" tabIndex={0} onClick={handleScreen}>
                    {screen === 'login' ? 'Register' : 'Login'}
                </span>
            </p>
        </div>
    );
}
