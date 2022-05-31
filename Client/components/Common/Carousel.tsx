import React from 'react';
import Slider from 'react-slick';
// eslint-disable-next-line import/no-absolute-path
import '/node_modules/slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/no-absolute-path
import '/node_modules/slick-carousel/slick/slick.css';

export default function Carousel({
    myref,
    children,
    ...settings
}: {
    children: React.ReactNode;
    // eslint-disable-next-line react/require-default-props
    myref?: any | {};
}) {
    return (
        <Slider ref={myref} {...settings}>
            {children}
        </Slider>
    );
}
