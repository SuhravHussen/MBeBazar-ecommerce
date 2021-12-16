import About from './About/About';
import Bottom from './About/Bottom';
import Features from './Features';
import FooterBanner from './FooterBanner/FooterBanner';

export default function Footer() {
    return (
        <>
            <FooterBanner />
            <Features />
            <About />
            <Bottom />
        </>
    );
}
