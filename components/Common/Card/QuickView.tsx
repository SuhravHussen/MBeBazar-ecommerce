import { RiCloseCircleLine } from 'react-icons/ri';
import ReactImageMagnify from 'react-image-magnify';
import styles from '../../../styles/components/Home/quickview.module.scss';
import { getPercentage } from '../../../utils/calculations';
import {
    Carousel,
    FiShoppingCart,
    Image,
    MyModal,
    QuantityPicker,
    Rating,
    // eslint-disable-next-line prettier/prettier
    useState
} from '../../../utils/commonImports';
import { ProductsSchema } from './schema';

type iProps = {
    open: boolean;
    setOpen: any;
    details: ProductsSchema;
};

export default function QuickView({ open, setOpen, details }: iProps) {
    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState();
    const settings1 = {
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplaySpeed: 8000,
        arrows: false,
        asNavFor: nav2,
        className: 'singleQuickViewFirstSlide',
        lazyLoad: 'progressive',
    };

    function NextArrow(props: any) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} role="button" tabIndex={0} />;
    }

    function PrevArrow(props: any) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} role="button" tabIndex={0} />;
    }

    const settings2 = {
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        autoplaySpeed: 8000,
        asNavFor: nav1,
        centerPadding: '35px',
        arrows: true,
        centerMode: true,
        nextArrow: <NextArrow className={styles.arrow} />,
        prevArrow: <PrevArrow className={styles.arrow} />,
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [value, setValue] = useState(0);

    return (
        <MyModal
            open={open}
            setOpen={setOpen}
            aria-labelledby={details?.title}
            aria-describedby={details?.category}
        >
            <div className={styles.modalContainer}>
                <span
                    className={styles.crossIcon}
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpen(false)}
                >
                    <RiCloseCircleLine />
                </span>
                <div className={styles.leftSide}>
                    <div className={styles.firstSlide}>
                        <Carousel {...settings1} myref={(slider1: any) => setNav1(slider1)}>
                            {details?.image.map((im) => (
                                <div className={styles.singleSlide} key={im}>
                                    {/* <Image
                                        src={im}
                                        height={350}
                                        width={350}
                                        placeholder="blur"
                                        blurDataURL="/images/loading-min.jpg"
                                    /> */}
                                    <ReactImageMagnify
                                        isHintEnabled
                                        enlargedImagePosition="over"
                                        {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: im,
                                            },
                                            largeImage: {
                                                src: im,
                                                width: 1200,
                                                height: 1200,
                                            },
                                        }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className={`${styles.secondSlide} quickViewLeftSlide`}>
                        <Carousel {...settings2} myref={(slider2: any) => setNav2(slider2)}>
                            {details?.image.map((img, i) => (
                                <div className={styles.singleSlide2} key={img}>
                                    <Image
                                        src={img}
                                        height={80}
                                        width={80}
                                        onClick={() => nav1.slickGoTo(i)}
                                        placeholder="blur"
                                        blurDataURL="/images/loading-min.jpg"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    {/* first row */}
                    <h3>{details?.onSale ? 'On Sale' : 'Sale Off'}</h3>
                    {/* second row */}
                    <h1>{details?.title}</h1>
                    {/* third row */}
                    <div className={styles.ratings}>
                        <Rating
                            name="read-only"
                            value={details?.ratings}
                            precision={0.1}
                            readOnly
                        />
                        <h5>(32 Reviews)</h5>
                    </div>
                    {/* fourth row */}
                    <div className={styles.prices}>
                        <h1>${details?.offerPrice}</h1>
                        <div className={styles.off}>
                            <h6>{getPercentage(details?.actualPrice, details?.offerPrice)}% Off</h6>
                            <del>${details?.actualPrice}</del>
                        </div>
                    </div>
                    {/* fifth row */}
                    <div className={styles.quantityCart}>
                        <QuantityPicker
                            value={value}
                            setValue={setValue}
                            max={10}
                            className={styles.quantity}
                        />
                        <button type="button">
                            <FiShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                    {/* sixth row */}
                    <div className={styles.footer}>
                        <h6>
                            Vendor: <span>{details?.vendorName}</span>
                        </h6>
                    </div>
                </div>
            </div>
        </MyModal>
    );
}
