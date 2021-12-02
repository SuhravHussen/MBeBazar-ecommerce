import { dynamic } from '../../utils/commonImports';

const Featured = dynamic(() => import('./Featured/Featured'));
const HeroCarousel = dynamic(() => import('./HeroCarousel/HeroCarousel'));
const PopularProducts = dynamic(() => import('./PopularProducts/PopularProducts'));
const LandingPage = () => (
    <>
        <HeroCarousel />
        <Featured />
        <PopularProducts />
    </>
);

export default LandingPage;
