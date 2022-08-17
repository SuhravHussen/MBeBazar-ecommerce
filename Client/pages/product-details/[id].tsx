import { NextPageContext } from 'next';
import Layout from '../../components/Layout/Layout';
import AdditionalInfo from '../../components/Products/ProductDetails/AdditionalInfo';
import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import RelatedProducts from '../../components/Products/ProductDetails/ReletedProducts';
import { iProduct } from '../../models/product.interface';

export interface review {
    review: string;
    rating: number;
    product: string;
    user: {
        name: string;
        avatar: string;
    };
    updatedAt: string;
}

export default function ProductDetailsPage({
    product,
    relatedProducts,
    reviews,
}: {
    product: iProduct;
    relatedProducts: iProduct[];
    reviews: review[];
}) {
    console.log(!!product);
    return (
        <Layout>
            {Object.keys(product).length !== 0 && (
                <>
                    <ProductDetails product={product} />
                    <AdditionalInfo
                        details={product.details}
                        reviews={reviews}
                        productId={product._id}
                    />
                    <RelatedProducts products={relatedProducts} />
                </>
            )}
        </Layout>
    );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    const { id } = ctx.query;
    const response = await fetch(`${process.env.BASE_URL}/product/${id}`);
    const data = await response.json();
    const reviews = await fetch(`${process.env.BASE_URL}/review?id=${id}`).then((res) =>
        res.json()
    );
    const { product = {}, relatedProduct = [] } = data.data;

    return {
        props: {
            product,
            relatedProducts: relatedProduct,
            reviews: reviews.data,
        },
    };
};
