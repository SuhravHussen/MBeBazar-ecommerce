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
    <>
      {Object.keys(product).length !== 0 && (
        <>
          <ProductDetails product={product} />
          <AdditionalInfo details={product.details} reviews={reviews} productId={product._id} />
          <RelatedProducts products={relatedProducts} />
        </>
      )}
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps((store)=> async (ctx)=>{
    const {dispatch} = store;
    const { id } = ctx.query;
     const product = await dispatch(productApi.endpoints.getProductDetails.initiate(id as string))
     const reviews = await dispatch(productApi.endpoints.getProductReviews.initiate(id as string))

    return {
        props: {
            product: product.data?.data?.product || {},
            relatedProducts: product.data?.data?.relatedProduct || [],
            reviews: reviews.data?.data || [],
        },
    };
})
