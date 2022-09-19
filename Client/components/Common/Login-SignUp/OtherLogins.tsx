import { signIn } from 'next-auth/react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import styles from '../../../styles/components/common/login-signUp/otherlogin.module.scss';
import PrimaryButton from '../Button/PrimaryButton';

export default function OtherLogins({ handleScreen, screen }: { handleScreen: any; screen: string }) {
  const handleSocialLogin = async (method: 'google' | 'facebook') => {
    try {
      signIn(method);
    } catch (error) {
    } finally {
      const reloadSession = () => {
        const event = new Event('visibilitychange');
        document.dispatchEvent(event);
      };
      reloadSession();
    }
  };

  return (
    <div className={styles.moreLogin}>
      <div className={styles.otherLogins}>
        <PrimaryButton className={styles.facebook} text="Login With Facebook" icon={<FaFacebookF />} onClick={() => handleSocialLogin('facebook')} />
        <PrimaryButton className={styles.google} text="Login With Google" icon={<FcGoogle />} onClick={() => handleSocialLogin('google')} />
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
