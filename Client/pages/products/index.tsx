import AllProducts from '../../components/Products/AllProducts/AllProducts';
import NoResults from '../../components/Products/AllProducts/NoResult';
import ProductsBanner from '../../components/Products/ProductsBanner';
import { iProduct } from '../../models/product.interface';
import { productApi } from '../../Redux/services/Products/services';
import { wrapper } from '../../Redux/Store/store';

export interface searchedProps {
    data: {
        limit: number;
        page: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        docs: iProduct[];
        totalDocs: number;
        totalPages: number;
        nextPage: number;
        pagingCounter: number;
    };
    query: string;
}

export default function Type({ data, query }: searchedProps) {
    return (
        <>
            <ProductsBanner />
            {data.totalDocs > 0 ? <AllProducts data={data} query={query} /> : <NoResults />}
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async (ctx)=>{
  try{
      const {dispatch} = store;
    
    const res = await dispatch(productApi.endpoints.getAllProductsBySearch.initiate({
        search: ctx.query.category as string,
    }))
    
    console.log(res)

    let data 
    if( 'data' in res){
        data = res.data.data
    }else if('error' in res){
        data = []
    }
    return {
        props: {
           data :data,
           query: ctx.query.category
        },
    };
  }catch{
    return {
        props: {
           data : [],
              query: ctx.query.category,
           
        },
    };
  }
})
