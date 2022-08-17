import { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import styles from '../../../styles/components/products/slideview.module.scss';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), { ssr: false });
export default function SlideView({ images }: { images: string[] }) {
    const [value, setValue] = useState(0);

    const magnifyImages = images.map((image) => (
        <ReactImageMagnify
            isHintEnabled
            enlargedImagePosition="over"
            {...{
                className: styles.rootImgContainer,
                smallImage: {
                    alt: 'image',
                    isFluidWidth: false,
                    height: 400,
                    width: 400,
                    src: image,
                },
                largeImage: {
                    src: image,
                    width: 1200,
                    height: 1200,
                },
            }}
        />
    ));

    const thumbnailImages = images.map((image) => (
        <img className={styles.thumb} alt="any" src={image} />
    ));

    const onChange = (v: any) => {
        setValue(v);
    };

    return (
        <>
            <Carousel value={value} slides={magnifyImages} onChange={onChange} />
            <Dots
                number={thumbnailImages.length}
                thumbnails={thumbnailImages}
                value={value}
                onChange={onChange}
            />
        </>
    );
}
