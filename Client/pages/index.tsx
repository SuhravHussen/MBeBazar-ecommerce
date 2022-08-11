import LandingPage from '../components/home/LandingPage';
import Layout from '../components/Layout/Layout';
import { iProduct } from '../models/product.interface';

const Home = ({
    mostSell,
    popular,
    dealsOfTheDay,
}: {
    mostSell: iProduct[];
    popular: iProduct[];
    dealsOfTheDay: iProduct[];
}) => (
    <Layout>
        <LandingPage mostSell={mostSell} popular={popular} dealsOfTheDay={dealsOfTheDay} />
    </Layout>
);
export default Home;

export async function getStaticProps() {
    const popular = `${process.env.BASE_URL}/product/popular`;
    const mostSell = `${process.env.BASE_URL}/product/mostSell`;
    const dealsOfTheDay = `${process.env.BASE_URL}/product/deals-of-the-day`;

    const popularProducts = await fetch(popular).then((res) => res.json());
    const mostSellProducts = await fetch(mostSell).then((res) => res.json());
    const dealsOfTheDayProducts = await fetch(dealsOfTheDay).then((res) => res.json());

    // Pass data to the page via props
    return {
        props: {
            popular: popularProducts.data,
            mostSell: mostSellProducts.data,
            dealsOfTheDay: dealsOfTheDayProducts.data,
        },
        revalidate: 300,
    };
}
