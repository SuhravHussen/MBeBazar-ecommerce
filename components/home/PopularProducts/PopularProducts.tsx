import data from '../../../FakeData/Data';
import PopularSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/Home/popularproducts.module.scss';
import { dynamic, useEffect, useState } from '../../../utils/commonImports';
import { PopularProductsSchema } from './schema';
import SingleProduct from './SingleProduct';

const QuickView = dynamic(() => import('./QuickView'));
export default function PopularProducts() {
    const [products, setProducts] = useState<PopularProductsSchema[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [quickViewDetails, setQuickViewDetails] = useState(0);
    useEffect(() => {
        const filteredProducts = data.filter((d) => {
            if (d.featured.indexOf('popular') === -1) {
                return false;
            }
            return true;
        });
        const newProducts = filteredProducts.map((p) => {
            const modified = {
                title: p.title,
                onSale: p.onSale,
                vendorName: 'NestFood',
                actualPrice: p.price,
                offerPrice: p.offerPrice,
                id: p.id,
                ratings: 4.5,
                image: p.images,
                category: p.category,
            };
            return modified;
        });

        setProducts(newProducts);
    }, []);

    return (
        <div className={styles.popularProductsContainer}>
            <QuickView
                open={modalOpen}
                setOpen={setModalOpen}
                details={products[quickViewDetails]}
            />
            <div className={styles.heading}>
                <h1>Popular Products</h1>
                <div className={styles.subCategories}>
                    <p>All</p>
                    <p>Milks & Dairies</p>
                    <p>Coffee & Teas</p>
                    <p>Pet Foods</p>
                    <p>Meats</p>
                    <p>Vegetables</p>
                    <p>Fruits</p>
                </div>
            </div>
            <div className={styles.allProducts}>
                {products.length > 0
                    ? products.map((p, i) => (
                          <SingleProduct
                              key={p.id}
                              product={p}
                              index={i}
                              setQuickViewDetails={setQuickViewDetails}
                              setModalOpen={setModalOpen}
                          />
                      ))
                    : Array(5)
                          .fill(null)
                          // eslint-disable-next-line react/no-array-index-key
                          .map((p, i) => <PopularSk key={i} />)}
            </div>
        </div>
    );
}
