import Pagination from '@mui/material/Pagination';
import ProductSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/products/allProducts.module.scss';
import { React, useEffect, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';
import QuickView from '../../Common/Card/QuickView';
import Select from '../../Common/Select';

export default function AllProducts() {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<any>([]);
    const [count, setCount] = useState(5);
    const [, setQuickViewDetails] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleSort = (v: {}) => {
        console.log(v);
    };

    // eslint-disable-next-line no-undef
    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => setPage(value);

    const fetchTotalItems = async () => {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await promise.json();
        setCount(data.length);
    };
    fetchTotalItems();

    const options = [
        { value: 'Featured', label: 'Featured' },
        { value: 'Low to High', label: 'Low to High' },
        { value: 'High to Low', label: 'High to Low' },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            console.log('loading', loading);
            const promise = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            const data = await promise.json();
            setProducts(data);

            setLoading(false);
            console.log('loading', loading);
        };

        fetchProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className={styles.allProducts}>
            <QuickView
                open={modalOpen}
                setOpen={setModalOpen}
                details={{
                    title: 'et fugit quas eum in in aperiam quod',
                    onSale: true,
                    vendorName: 'NestStore',
                    actualPrice: 54,
                    offerPrice: 44,
                    id: '3454454',
                    ratings: 3.5,
                    image: [
                        'https://res.cloudinary.com/doircnueq/image/upload/v1635596669/MBeCommerece/Products/thumbnail-8_ulpjbv.jpg',
                        'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/seedOfChangeOrganicQuinoe_oodn92.jpg',
                        'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-10-1_goxpvv.jpg',
                    ],
                    category: 'Juice',
                }}
            />
            <div className={styles.header}>
                <p>
                    We found <span>{count}</span> items for you!
                </p>
                <div className={styles.filters}>
                    <Select handleChange={handleSort} options={options} />
                </div>
            </div>
            <section className={styles.products}>
                {!loading &&
                    products.map((p: any, i: number) => (
                        <Card
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                            setQuickViewDetails={setQuickViewDetails}
                            setModalOpen={setModalOpen}
                            index={i}
                            product={{
                                title: 'et fugit quas eum in in aperiam quod',
                                onSale: true,
                                vendorName: 'NestStore',
                                actualPrice: 54,
                                offerPrice: 44,
                                id: '3454454',
                                ratings: 3.5,
                                image: [
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596669/MBeCommerece/Products/thumbnail-8_ulpjbv.jpg',
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/seedOfChangeOrganicQuinoe_oodn92.jpg',
                                    'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-10-1_goxpvv.jpg',
                                ],
                                category: 'Juice',
                            }}
                        />
                    ))}
                {loading &&
                    Array(10)
                        .fill(null)
                        // eslint-disable-next-line react/no-array-index-key
                        .map((_, i) => <ProductSk key={i} />)}
            </section>
            <Pagination
                onChange={handlePageChange}
                count={count / 10}
                page={page}
                shape="rounded"
                color="secondary"
            />
        </div>
    );
}
