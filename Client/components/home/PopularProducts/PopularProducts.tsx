import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/Home/popularproducts.module.scss';
import { dynamic, SectionHeader, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';

const QuickView = dynamic(() => import('../../Common/Card/QuickView'), { ssr: false });
export default function PopularProducts({ popular }: { popular: iProduct[] }) {
    const [products] = useState<iProduct[]>(popular);
    const [modalOpen, setModalOpen] = useState(false);
    const [quickViewDetails, setQuickViewDetails] = useState(0);

    return (
        <div className={styles.popularProductsContainer}>
            {modalOpen && (
                <QuickView
                    open={modalOpen}
                    setOpen={setModalOpen}
                    details={products[quickViewDetails]}
                />
            )}
            <SectionHeader>
                <h1>Popular Products</h1>
            </SectionHeader>
            <div className={styles.allProducts}>
                {products.length > 0 ? (
                    products.map((p, i) => (
                        <Card
                            key={p.title}
                            product={p}
                            index={i}
                            setQuickViewDetails={setQuickViewDetails}
                            setModalOpen={setModalOpen}
                        />
                    ))
                ) : (
                    <div className={styles.notFound}>
                        <h2>Sorry! No Products available in this category</h2>
                    </div>
                )}
            </div>
        </div>
    );
}
