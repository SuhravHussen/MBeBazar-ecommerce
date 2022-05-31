import { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import styles from '../../../styles/components/products/slideview.module.scss';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), { ssr: false });
export default function SlideView() {
    const [value, setValue] = useState(0);
    const [slides] = useState([
        <ReactImageMagnify
            isHintEnabled
            enlargedImagePosition="over"
            {...{
                className: 'products_detail_slide_image',
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-5_vqmyif.jpg',
                },
                largeImage: {
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-5_vqmyif.jpg',
                    width: 1200,
                    height: 1200,
                },
            }}
        />,
        <ReactImageMagnify
            isHintEnabled
            enlargedImagePosition="over"
            {...{
                className: 'products_detail_slide_image',
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-5_vqmyif.jpg',
                },
                largeImage: {
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-5_vqmyif.jpg',
                    width: 1200,
                    height: 1200,
                },
            }}
        />,

        <ReactImageMagnify
            isHintEnabled
            enlargedImagePosition="over"
            {...{
                className: 'products_detail_slide_image',
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-2_bvefyq.jpg',
                },
                largeImage: {
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-2_bvefyq.jpg',
                    width: 1200,
                    height: 1200,
                },
            }}
        />,
        <ReactImageMagnify
            isHintEnabled
            enlargedImagePosition="over"
            {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-4_pwutld.jpg',
                },
                largeImage: {
                    src: 'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-4_pwutld.jpg',
                    width: 1200,
                    height: 1200,
                },
            }}
        />,
    ]);
    const [thumb] = useState([
        <img
            className={styles.thumb}
            alt="any"
            src="https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-5_vqmyif.jpg"
        />,
        <img
            className={styles.thumb}
            alt="any"
            src="https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-2_bvefyq.jpg"
        />,
        <img
            className={styles.thumb}
            alt="any"
            src="https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-4_pwutld.jpg"
        />,
    ]);

    const onChange = (v: any) => {
        setValue(v);
    };

    return (
        <>
            <Carousel value={value} slides={slides} onChange={onChange} />
            <Dots number={slides.length} thumbnails={thumb} value={value} onChange={onChange} />
        </>
    );
}
