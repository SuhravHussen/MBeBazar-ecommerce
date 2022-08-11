import { iProduct } from '../../models/product.interface';
import DealsOftheDay from './DealsOfTheDay/DealsOftheDay';
import Featured from './Featured/Featured';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import PopularProducts from './PopularProducts/PopularProducts';
import TopProducts from './Tops/TopProducts';

const LandingPage = ({
    mostSell,
    popular,
    dealsOfTheDay,
}: {
    mostSell: iProduct[];
    popular: iProduct[];
    dealsOfTheDay: iProduct[];
}) => (
    <>
        <HeroCarousel />
        <Featured />
        <PopularProducts popular={popular.slice(0, 15)} />
        <DealsOftheDay dealsOfTheDay={dealsOfTheDay} />
        <TopProducts mostSell={mostSell} />
        {/* <Footer /> */}
    </>
);

export default LandingPage;
