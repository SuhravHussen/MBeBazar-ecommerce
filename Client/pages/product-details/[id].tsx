import Layout from '../../components/Layout/Layout';
import AdditionalInfo from '../../components/Products/ProductDetails/AdditionalInfo';
import ProductDetails from '../../components/Products/ProductDetails/ProductDetails';
import RelatedProducts from '../../components/Products/ProductDetails/ReletedProducts';
import { iProduct } from '../../models/product.interface';
import { productApi } from '../../Redux/services/Products/services';
import { wrapper } from '../../Redux/Store/store';

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
  return (
    <Layout>
      {Object.keys(product).length !== 0 && (
        <>
          <ProductDetails product={product} />
          <AdditionalInfo details={product.details} reviews={reviews} productId={product._id} />
          <RelatedProducts products={relatedProducts} />
        </>
      )}
    </Layout>
  );
}

// export const getServerSideProps = async (ctx: NextPageContext) => {
//   const { id } = ctx.query;
//   const response = await fetch(`${process.env.BASE_URL}/product/${id}`);
//   const data = await response.json();
//   const reviews = await fetch(`${process.env.BASE_URL}/review?id=${id}`).then(res => res.json());
//   const { product = {}, relatedProduct = [] } = data.data;

//   return {
//     props: {
//       product,
//       relatedProducts: relatedProduct,
//       reviews: reviews.data,
//     },
//   };
// };


export const getServerSideProps = wrapper.getServerSideProps((store)=> async (ctx)=>{
    const {dispatch} = store;
    const { id } = ctx.query;
     const product = await dispatch(productApi.endpoints.getProductDetails.initiate(id as string))
     const reviews = await dispatch(productApi.endpoints.getProductReviews.initiate(id as string))
     console.log("id is ",id)
     console.log("product is ",product.data?.data?.product)
      console.log("related Product is ",product.data?.data?.relatedProduct)
        console.log("review",reviews.data?.data)
    return {
        props: {
            product: product.data?.data?.product || {},
            relatedProducts: product.data?.data?.relatedProduct || [],
            reviews: reviews.data?.data || [],
        },
    };
})
