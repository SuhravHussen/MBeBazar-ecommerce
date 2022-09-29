import LandingPage from '../components/home/LandingPage';
import { iProduct } from '../models/product.interface';
import { productApi } from '../Redux/services/Products/services';
import { wrapper } from '../Redux/Store/store';

const Home = ({
    mostSell,
    popular,
    dealsOfTheDay,
}: {
    mostSell: iProduct[];
    popular: iProduct[];
    dealsOfTheDay: iProduct[];
}) => (
    <>
        <LandingPage mostSell={mostSell} popular={popular} dealsOfTheDay={dealsOfTheDay} />
    </>
);
export default Home;

export const getStaticProps = wrapper.getStaticProps((store)=> async ()=>{
    const {dispatch} = store;

      const popularProducts = await dispatch(productApi.endpoints.getPopularProducts.initiate())
      const mostSellProducts = await dispatch(productApi.endpoints.getMostSellProducts.initiate())
      const dealsOfTheDayProducts = await dispatch(productApi.endpoints.getDealsOfTheDay.initiate())
  
    return {
        props: {
            popular: popularProducts.data?.data || [],
            mostSell: mostSellProducts.data?.data || [],
            dealsOfTheDay: dealsOfTheDayProducts.data?.data || [],
        },
        revalidate: 300,
    };
})
