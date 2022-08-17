import { Divider } from '@mui/material';
import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/products/relatedproducts.module.scss';
import { SectionHeader, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';
import QuickView from '../../Common/Card/QuickView';

export default function RelatedProducts({ products }: { products: iProduct[] }) {
    const [quickViewDetails, setQuickViewDetails] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.relatedProductsContainer}>
            <QuickView
                open={modalOpen}
                setOpen={setModalOpen}
                details={products[quickViewDetails]}
            />
            <SectionHeader>
                <h1>Related products</h1>
                <Divider />
            </SectionHeader>
            <div className={styles.products}>
                {products.length > 0 &&
                    products.map((p, i) => (
                        <Card
                            key={p._id}
                            index={i}
                            setModalOpen={setModalOpen}
                            setQuickViewDetails={setQuickViewDetails}
                            product={p}
                        />
                    ))}
                {products.length === 0 && <h3>No related products found</h3>}
            </div>
        </div>
    );
}
