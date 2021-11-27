import { SiMinutemailer } from 'react-icons/si';
import Slider from 'react-slick';
import styles from '../../../styles/components/Home/heroCarousel.module.scss';
// eslint-disable-next-line import/no-absolute-path
import '/node_modules/slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/no-absolute-path
import '/node_modules/slick-carousel/slick/slick.css';

export default function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                <div className={`${styles.carouselItem} ${styles.item1}`}>
                    <div className={styles.Item}>
                        <h1>Don&apos;t miss amazing grocery deals</h1>
                        <h2>Sign up for the daily newsletter</h2>
                        <div className={styles.input}>
                            <SiMinutemailer className={styles.icon} />{' '}
                            <input type="text" placeholder="your email address" />
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.carouselItem} ${styles.item2}`}>
                    <div className={styles.Item}>
                        <h1>Fresh Vegetables Big discount</h1>
                        <h2>save up to 50% off on your first order</h2>
                        <div className={styles.input}>
                            <SiMinutemailer className={styles.icon} />{' '}
                            <input type="text" placeholder="your email address" />
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
