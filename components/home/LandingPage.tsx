import DealsOftheDay from './DealsOfTheDay/DealsOftheDay';
import Featured from './Featured/Featured';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import PopularProducts from './PopularProducts/PopularProducts';

const LandingPage = () => (
    <>
        <HeroCarousel />
        <Featured />
        <PopularProducts />
        <DealsOftheDay />
    </>
);

export default LandingPage;
