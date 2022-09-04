import { RiCloseCircleLine } from 'react-icons/ri';
import ReactImageMagnify from 'react-image-magnify';
import { useToasts } from 'react-toast-notifications';
import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/Home/quickview.module.scss';
import handleAddToCart from '../../../utils/addToCart';
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

type iProps = {
    open: boolean;
    setOpen: any;
    details: iProduct;
};

export default function QuickView({ open, setOpen, details }: iProps) {
    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState();
    const [quantity, setProductQuantity] = useState(1);
    const { addToast } = useToasts();

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
                            {details?.images.map((im) => (
                                <div className={styles.singleSlide} key={im}>
                                    <ReactImageMagnify
                                        isHintEnabled
                                        enlargedImagePosition="over"
                                        {...{
                                            smallImage: {
                                                alt: details?.title,
                                                width: 300,
                                                src: im,
                                                isFluidWidth: false,
                                                height: 300,
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
                            {details?.images.map((img, i) => (
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
                        <Rating name="read-only" value={4.5} precision={0.1} readOnly />
                        <h5>(32 Reviews)</h5>
                    </div>
                    {/* fourth row */}
                    <div className={styles.prices}>
                        <h1>${details?.offerPrice}</h1>
                        <div className={styles.off}>
                            <h6>{getPercentage(details?.price, details?.offerPrice)}% Off</h6>
                            <del>${details?.price}</del>
                        </div>
                    </div>
                    {/* fifth row */}
                    <div className={styles.quantityCart}>
                        <QuantityPicker
                            defaultValue={quantity}
                            callback={(v: number) => setProductQuantity(v)}
                            max={15}
                            className={styles.quantity}
                        />
                        <button
                            onClick={() => {
                                handleAddToCart(details, quantity);
                                addToast('Product added to cart', {
                                    appearance: 'success',
                                    autoDismiss: true,
                                    autoDismissTimeout: 2000,
                                });
                            }}
                            type="button"
                        >
                            <FiShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                    {/* sixth row */}
                    <div className={styles.footer}>
                        <h6>
                            Vendor: <span>MBeBazar</span>
                        </h6>
                    </div>
                </div>
            </div>
        </MyModal>
    );
}
