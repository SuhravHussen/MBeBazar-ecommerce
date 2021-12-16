import styles from '../../../../styles/components/common/About/About.module.scss';
import { Image } from '../../../../utils/commonImports';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.column}>
                <Image
                    width={215}
                    height={60}
                    src="/images/logos/nestLogo.svg"
                    alt="e-commerce logo"
                />
                <p>Awesome grocery store website template</p>

                <div className={styles.contacts}>
                    <p>
                        <Image height={16} width={16} src="/images/icons/location.svg" />
                        <span>Address:</span>5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                    </p>
                    <p>
                        <Image height={16} width={16} src="/images/icons/call.svg" />
                        <span>Call Us:</span>(+91) - 540-025-124553
                    </p>
                    <p>
                        <Image height={16} width={16} src="/images/icons/email.svg" />
                        <span>Email:</span>nesteccomerce@gmail.com
                    </p>
                </div>
            </div>
            <div className={styles.column}>
                <h2>Install App</h2>
                <p>From App store or Google Play</p>
                <div className={styles.appImage}>
                    <Image src="/images/icons/appStore.jpg" width={128} height={45} />
                    <Image src="/images/icons/playStore.jpg" width={128} height={45} />
                </div>
                <div className={styles.payments}>
                    <p>Secured Payment Gateways</p>
                    <Image width={225} height={35} src="/images/icons/payment-methods.png" />
                </div>
            </div>
        </div>
    );
}
