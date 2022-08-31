import styles from '../../../../styles/components/common/About/bottom.module.scss';
import { Image } from '../../../../utils/commonImports';

export default function Bottom() {
    return (
        <div className={styles.bottom}>
            <div className={styles.columnLeft}>
                <p>
                    © 2022, MBeBAZAR - <span>Suhrav&apos;s </span>Ecommerce Template All rights
                    reserved
                </p>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.social}>
                    <h3>Follow Us</h3>
                    <div className={styles.icon}>
                        <Image layout="fill" src="/images/social/facebook.svg" />
                    </div>
                    <div className={styles.icon}>
                        <Image layout="fill" src="/images/social/twitter.svg" />
                    </div>
                    <div className={styles.icon}>
                        <Image layout="fill" src="/images/social/instagram.svg" />
                    </div>
                    <div className={styles.icon}>
                        <Image layout="fill" src="/images/social/pinterest.svg" />
                    </div>
                    <div className={styles.icon}>
                        <Image layout="fill" src="/images/social/youtube.svg" />
                    </div>
                </div>
                <p>Up to 15% discount on your first subscribe</p>
            </div>
        </div>
    );
}
