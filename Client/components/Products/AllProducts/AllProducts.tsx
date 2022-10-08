
import Pagination from '@mui/material/Pagination';

// @ts-ignore
import { iProduct } from '../../../models/product.interface';
import { searchedProps } from '../../../pages/products';
import { useGetAllProductsBySearchMutation } from '../../../Redux/services/Products/services';
import ProductSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/products/allProducts.module.scss';
import { React, useEffect, useRef, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';
import QuickView from '../../Common/Card/QuickView';
import NoResult from './NoResult';

export default function AllProducts({ data, query }: searchedProps) {
  const [page, setPage] = useState<number>(data.page);
  const [totalPage, setTotalPage] = useState<number>();
  const [hasNextPage, setHasNextPage] = useState<boolean>();
  const [hasPrevPage, setHasPrevPage] = useState<boolean>();
  const [products, setProducts] = useState<iProduct[]>(data.docs);
  const [quickViewDetails, setQuickViewDetails] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);


  const [searchProduct , {isLoading , isError}] = useGetAllProductsBySearchMutation()

  useEffect(() => {
  setPage(data.page);
  setTotalPage(data.totalPages);
  setHasNextPage(data.hasNextPage);
  setHasPrevPage(data.hasPrevPage);
  setProducts(data.docs);
  }, []);


  // eslint-disable-next-line no-undef
 const ref = useRef(null as any);
  // const options = [
  //   { value: 'Featured', label: 'Featured' },
  //   { value: 'Low to High', label: 'Low to High' },
  //   { value: 'High to Low', label: 'High to Low' },
  // ];

  const fetchProducts = async (pageNumber: number) => {
    const res = await searchProduct({
        search: query,
        page: pageNumber,
      })
   
    if( 'data' in res){  
      setPage(pageNumber);
      const data = res.data.data;
      setProducts(data.docs);
      setHasNextPage(data.hasNextPage);
      setHasPrevPage(data.hasPrevPage);
      setTotalPage(data.totalPages);
     
      ref.current && ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  };
  // eslint-disable-next-line no-undef
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    fetchProducts(value);
  };


  return (
    <div ref={ref} className={styles.allProducts}>
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
        {!isLoading &&
          products.map((p: any, i: number) => (
            <Card key={p._id} setQuickViewDetails={setQuickViewDetails} setModalOpen={setModalOpen} index={i} product={p} />
          ))}
        {isLoading &&
          Array(5)
            .fill(null)
            // eslint-disable-next-line react/no-array-index-key
            .map((_, i) => <ProductSk key={i} />)}
        {!isLoading && products.length < 1 && <NoResult />}
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
      {isError && <p>Something went wrong</p>}
    </div>
  );
}
