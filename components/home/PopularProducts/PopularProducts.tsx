import data from '../../../FakeData/Data';
import PopularSk from '../../../skeletons/PopularSk';
import styles from '../../../styles/components/Home/popularproducts.module.scss';
import { dynamic, Fade, useEffect, useState } from '../../../utils/commonImports';
import { PopularProductsSchema } from './schema';
import SingleProduct from './SingleProduct';

const QuickView = dynamic(() => import('./QuickView'), { ssr: false });
export default function PopularProducts() {
    const [products, setProducts] = useState<PopularProductsSchema[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [quickViewDetails, setQuickViewDetails] = useState(0);
    const [loading] = useState(false);
    const [activeClassName, setActiveClassName] = useState('all');
    // get all popular products
    const getALlPopularProducts = () => {
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
        setActiveClassName('all');
    };

    useEffect(() => {
        getALlPopularProducts();
    }, []);

    // handle filter categories
    const changeCategory = (category: string) => {
        const newProducts = products.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(newProducts);
        setActiveClassName(category);
    };

    return (
        <div className={styles.popularProductsContainer}>
            {modalOpen && (
                <QuickView
                    open={modalOpen}
                    setOpen={setModalOpen}
                    details={products[quickViewDetails]}
                />
            )}
            <div className={styles.heading}>
                <h1>Popular Products</h1>
                <div className={styles.subCategories}>
                    <p
                        role="presentation"
                        onClick={getALlPopularProducts}
                        className={activeClassName === 'all' ? styles.active : ''}
                    >
                        All
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Milks & Dairies')}
                        className={activeClassName === 'Milks & Dairies' ? styles.active : ''}
                    >
                        Milks & Dairies
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Coffee & Teas')}
                        className={activeClassName === 'Coffee & Teas' ? styles.active : ''}
                    >
                        Coffee & Teas
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Pet Foods')}
                        className={activeClassName === 'Pet Foods' ? styles.active : ''}
                    >
                        Pet Foods
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Meats')}
                        className={activeClassName === 'Meats' ? styles.active : ''}
                    >
                        Meats
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Vegetables')}
                        className={activeClassName === 'Vegetables' ? styles.active : ''}
                    >
                        Vegetables
                    </p>
                    <p
                        role="presentation"
                        onClick={() => changeCategory('Fruits')}
                        className={activeClassName === 'Fruits' ? styles.active : ''}
                    >
                        Fruits
                    </p>
                </div>
            </div>
            <div className={styles.allProducts}>
                {products.length > 0 && !loading ? (
                    products.map((p, i) => (
                        <Fade className={styles.singleProduct} cascade>
                            <SingleProduct
                                key={p.id}
                                product={p}
                                index={i}
                                setQuickViewDetails={setQuickViewDetails}
                                setModalOpen={setModalOpen}
                            />
                        </Fade>
                    ))
                ) : (
                    <div className={styles.notFound}>
                        <h2>Sorry! No Products available in this category</h2>
                    </div>
                )}

                {loading &&
                    Array(5)
                        .fill(null)
                        // eslint-disable-next-line react/no-array-index-key
                        .map((p, i) => <PopularSk key={i} />)}
            </div>
        </div>
    );
}
