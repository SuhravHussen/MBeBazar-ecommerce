import { SiMinutemailer } from 'react-icons/si';
import styles from '../../../styles/components/common/banner.module.scss';
import { Image } from '../../../utils/commonImports';

export default function Banner({
    image,
    title,
    subHead,
}: {
    image: any;
    title: string;
    subHead: string;
}) {
    return (
        <div className={`${styles.bannerItem}`}>
            <Image
                placeholder="blur"
                blurDataURL="/public/images/banner/banner1.png"
                className={styles.image}
                src={image}
                layout="fill"
                objectFit="cover"
            />
            <div className={styles.Item}>
                <h1>{title}</h1>
                <h2>{subHead}</h2>
                <div className={styles.input}>
                    <SiMinutemailer className={styles.icon} />{' '}
                    <input type="text" placeholder="your email address" />
                    <button type="button">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
