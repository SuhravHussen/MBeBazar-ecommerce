import Layout from '../../components/Layout/Layout';
import AdditionalInfo from '../../components/Products/ProductDetails/AdditionalInfo';
import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import RelatedProducts from '../../components/Products/ProductDetails/ReletedProducts';

export default function ProductDetailsPage() {
    return (
        <Layout>
            <ProductDetails />
            <AdditionalInfo />
            <RelatedProducts />
        </Layout>
    );
}
