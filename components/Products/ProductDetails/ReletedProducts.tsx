import { Divider } from '@mui/material';
import styles from '../../../styles/components/products/relatedproducts.module.scss';
import { SectionHeader, useState } from '../../../utils/commonImports';
import Card from '../../Common/Card/Card';
import QuickView from '../../Common/Card/QuickView';

export default function RelatedProducts() {
    const [, setQuickViewDetails] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.relatedProductsContainer}>
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
            <SectionHeader>
                <h1>Related products</h1>
                <Divider />
            </SectionHeader>
            <div className={styles.products}>
                {Array(3)
                    .fill(null)
                    .map((o, i) => (
                        <Card
                            index={i}
                            setModalOpen={setModalOpen}
                            setQuickViewDetails={setQuickViewDetails}
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
            </div>
        </div>
    );
}
