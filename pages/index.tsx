import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';

const LandingPage = dynamic(() => import('../components/home/LandingPage'), {
    loading: () => <p>loading</p>,
});
const Home = () => (
    <Layout>
        <LandingPage />
    </Layout>
);
export default Home;
