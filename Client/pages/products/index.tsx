import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout/Layout';
import AllProducts from '../../components/Products/AllProducts/AllProducts';
import NoResults from '../../components/Products/AllProducts/NoResult';
import ProductsBanner from '../../components/Products/ProductsBanner';
import { iProduct } from '../../models/product.interface';

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
        <Layout>
            <ProductsBanner />
            {data.totalDocs > 0 ? <AllProducts data={data} query={query} /> : <NoResults />}
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${process.env.BASE_URL}/product/full-search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: context.query.category }),
    });
    const data = await res.json();

    return {
        props: {
            data: data.data,
            query: context.query.category,
        },
    };
};
