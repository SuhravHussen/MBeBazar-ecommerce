import Layout from '../../components/Layout/Layout';
import AllProducts from '../../components/Products/AllProducts/AllProducts';
import ProductsBanner from '../../components/Products/ProductsBanner';

export default function Type() {
    return (
        <Layout>
            <ProductsBanner />
            <AllProducts />
        </Layout>
    );
}
