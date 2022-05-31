import feature1 from '../../../public/images/footer/footer1.svg';
import feature2 from '../../../public/images/footer/footer2.svg';
import feature3 from '../../../public/images/footer/footer3.svg';
import feature4 from '../../../public/images/footer/footer4.svg';
import feature5 from '../../../public/images/footer/footer5.svg';
import feature6 from '../../../public/images/footer/footer6.svg';
import styles from '../../../styles/components/common/features.module.scss';
import { Fade, Image } from '../../../utils/commonImports';

export default function Features() {
    const features = [
        {
            image: feature1,
            title: 'Best prices & offers',
            desc: 'Orders $50 or more',
        },
        {
            image: feature2,
            title: 'Free delivery',
            desc: '24/7 amazing services',
        },
        {
            image: feature3,
            title: 'Great daily deal',
            desc: 'When you sign up',
        },
        {
            image: feature4,
            title: 'Wide assortment',
            desc: 'Mega Discounts',
        },
        {
            image: feature5,
            title: 'Easy returns',
            desc: 'Within 30 days',
        },
        {
            image: feature6,
            title: 'Safe delivery',
            desc: 'Within 30 days',
        },
    ];

    return (
        <div className={styles.featuresContainer}>
            {features.map((feature) => (
                <Fade direction="up" className={styles.fade} key={feature.title}>
                    <div className={styles.feature}>
                        <Image src={feature.image} alt={feature.title} height={50} width={50} />

                        <div className={styles.detail}>
                            <h2>{feature.title}</h2>
                            <p>{feature.desc}</p>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    );
}
