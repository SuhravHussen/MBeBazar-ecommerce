import styles from '../../../styles/components/products/allProducts.module.scss';
import Select from '../../Common/Select';

export default function AllProducts() {
    const handleSort = (v: {}) => {
        console.log(v);
    };

    const options = [
        { value: 'Featured', label: 'Featured' },
        { value: 'Low to High', label: 'Low to High' },
        { value: 'High to Low', label: 'High to Low' },
    ];

    return (
        <div className={styles.allProducts}>
            <div className={styles.header}>
                <p>
                    We found <span>29</span> items for you!
                </p>
                <div className={styles.filters}>
                    <Select handleChange={handleSort} options={options} />
                </div>
            </div>
        </div>
    );
}
