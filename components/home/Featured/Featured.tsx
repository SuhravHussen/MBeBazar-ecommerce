import { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import FeaturedSk from '../../../skeletons/FeaturedSk';
import styles from '../../../styles/components/Home/featured.module.scss';
import { Fade, Image } from '../../../utils/commonImports';
import Carousel from '../../Common/Carousel';

export default function Featured() {
    const slider = useRef<any>();

    const settings = {
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToScroll: 8,
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        className: 'singleSlide',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 6,

                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,

                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const categories = [
        {
            name: 'Burger',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662515/MBeCommerece/featured/cat-13_b183v8.png',
        },
        {
            name: 'Organic Kiwi',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662518/MBeCommerece/featured/cat-12_qfqsqz.png',
        },
        {
            name: 'Fruits',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662520/MBeCommerece/featured/cat-9_eyprtj.png',
        },
        {
            name: 'Electronics',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662514/MBeCommerece/featured/cat-15_xpgdxe.png',
        },
        {
            name: 'Snack',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662515/MBeCommerece/featured/cat-14_qef31a.png',
        },
        {
            name: 'Vegetables',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662552/MBeCommerece/featured/cat-1_mezfy4.png',
        },
        {
            name: 'Accessories',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1638074821/MBeCommerece/featured/blender_kpwr3v.png',
        },
        {
            name: 'Burger',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662515/MBeCommerece/featured/cat-13_b183v8.png',
        },
        {
            name: 'Organic Kiwi',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662518/MBeCommerece/featured/cat-12_qfqsqz.png',
        },
        {
            name: 'Fruits',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662520/MBeCommerece/featured/cat-9_eyprtj.png',
        },
        {
            name: 'Electronics',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662514/MBeCommerece/featured/cat-15_xpgdxe.png',
        },
        {
            name: 'Snack',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662515/MBeCommerece/featured/cat-14_qef31a.png',
        },
        {
            name: 'Vegetables',
            image: 'https://res.cloudinary.com/doircnueq/image/upload/v1635662552/MBeCommerece/featured/cat-1_mezfy4.png',
        },
    ];

    const bgColors = ['#f2fce4', '#fff3ff', '#fffceb', '#ecffec', '#feefea', '#fff3eb'];

    return (
        <div className={styles.featuredContainer}>
            <div className={styles.heading}>
                <h1>Featured Categories</h1>
                <div className={styles.icons}>
                    <FiArrowLeft
                        onClick={() => slider?.current?.slickPrev()}
                        className={styles.icon}
                    />{' '}
                    <FiArrowRight
                        className={styles.icon}
                        onClick={() => slider?.current?.slickNext()}
                    />
                </div>
            </div>
            <Fade className={styles.carousel}>
                <Carousel myref={slider} {...settings}>
                    {categories.length > 0
                        ? categories.map((c, i) => (
                              <div // eslint-disable-next-line react/no-array-index-key
                                  key={i}
                                  className={styles.outerSingleItem}
                              >
                                  <div
                                      style={{
                                          backgroundColor:
                                              bgColors[Math.floor(Math.random() * bgColors.length)],
                                      }}
                                      className={styles.singleItem}
                                  >
                                      <Image
                                          src={c.image}
                                          height={100}
                                          width={100}
                                          alt="category image"
                                          quality={50}
                                          placeholder="blur"
                                          blurDataURL="/images/loading-min.jpg"
                                      />
                                      <h4>{c.name}</h4>
                                      <p>30 items</p>
                                  </div>
                              </div>
                          ))
                        : Array(8)
                              .fill(null)
                              .map((i) => <FeaturedSk key={i} />)}
                </Carousel>
            </Fade>
            <Fade>
                <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.card1}`}>
                        <h1>Every Fresh &apos; Clean with Our Products</h1>
                        <button type="button" className={styles.button}>
                            Shop Now
                        </button>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <h1>Make your Breakfast Healthy and Easy</h1>
                        <button type="button" className={styles.button}>
                            Shop Now
                        </button>
                    </div>
                    <div className={`${styles.card} ${styles.card3}`}>
                        <h1>The best Organic Products Online</h1>
                        <button type="button" className={styles.button}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
