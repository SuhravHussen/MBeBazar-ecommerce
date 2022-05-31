import DealsOftheDay from './DealsOfTheDay/DealsOftheDay';
import Featured from './Featured/Featured';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import PopularProducts from './PopularProducts/PopularProducts';
import TopProducts from './Tops/TopProducts';

const LandingPage = () => (
    <>
        <HeroCarousel />
        <Featured />
        <PopularProducts />
        <DealsOftheDay />
        <TopProducts />
        {/* <Footer /> */}
    </>
);

export default LandingPage;
