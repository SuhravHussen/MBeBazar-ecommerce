import Pagination from '@mui/material/Pagination';
import { iProduct } from '../../../models/product.interface';
import { searchedProps } from '../../../pages/products';
import ProductSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/products/allProducts.module.scss';
import { React, useEffect, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';
import QuickView from '../../Common/Card/QuickView';

import NoResult from './NoResult';

export default function AllProducts({ data, query }: searchedProps) {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(data.totalPages);
  const [hasNextPage, setHasNextPage] = useState<boolean>();
  const [hasPrevPage, setHasPrevPage] = useState<boolean>();
  const [products, setProducts] = useState<iProduct[]>([]);
  const [quickViewDetails, setQuickViewDetails] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSort = (v: {}) => {};

  // eslint-disable-next-line no-undef

  const options = [
    { value: 'Featured', label: 'Featured' },
    { value: 'Low to High', label: 'Low to High' },
    { value: 'High to Low', label: 'High to Low' },
  ];

  const fetchProducts = async (pageNumber: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.BASE_URL}/product/full-search?page=${pageNumber}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: query }),
      });
      const resData = await response.json();

      setProducts(resData.data.docs);
      setHasNextPage(resData.data.hasNextPage);
      setHasPrevPage(resData.data.hasPrevPage);
      setTotalPage(resData.data.totalPages);
      setPage(resData.data.page);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };
  // eslint-disable-next-line no-undef
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    fetchProducts(value);
  };

  useEffect(() => {
    setPage(data.page);
    setTotalPage(data.totalPages);
    setHasNextPage(data.hasNextPage);
    setHasPrevPage(data.hasPrevPage);
    setProducts(data.docs);
  }, [data]);

  return (
    <div className={styles.allProducts}>
      <QuickView open={modalOpen} setOpen={setModalOpen} details={products[quickViewDetails]} />

      <div className={styles.header}>
        <p>
          We found <span>{data.totalDocs}</span> items for you!
        </p>
        {/* <div className={styles.filters}>
          <Select handleChange={handleSort} options={options} />
        </div> */}
      </div>
      <section className={styles.products}>
        {!loading &&
          products.map((p: any, i: number) => (
            <Card key={p._id} setQuickViewDetails={setQuickViewDetails} setModalOpen={setModalOpen} index={i} product={p} />
          ))}
        {loading &&
          Array(5)
            .fill(null)
            // eslint-disable-next-line react/no-array-index-key
            .map((_, i) => <ProductSk key={i} />)}
        {!loading && products.length < 1 && <NoResult />}
      </section>
      {data.totalDocs > 0 && (
        <Pagination
          onChange={handlePageChange}
          count={totalPage}
          page={page}
          shape="rounded"
          color="secondary"
          hideNextButton={!hasNextPage}
          hidePrevButton={!hasPrevPage}
        />
      )}
      {error && <p>Something went wrong</p>}
    </div>
  );
}
