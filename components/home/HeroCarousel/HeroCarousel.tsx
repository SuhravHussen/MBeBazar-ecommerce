import Banner1 from '../../../public/images/banner/banner1.png';
import Banner2 from '../../../public/images/banner/banner2.png';
import styles from '../../../styles/components/Home/heroCarousel.module.scss';
import { Banner } from '../../../utils/commonImports';
import Carousel from '../../Common/Carousel';

export default function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dotsClass: 'heroDots slick-dots',
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
    };

    return (
        <div className={styles.carouselContainer}>
            <Carousel {...settings}>
                <Banner
                    title="Don't miss amazing grocery deals"
                    image={Banner1}
                    subHead="Sign up for the daily newsletter"
                />
                <Banner
                    title="Fresh Vegetables Big discount"
                    image={Banner2}
                    subHead="save up to 50% off on your first order"
                />
            </Carousel>
        </div>
    );
}
