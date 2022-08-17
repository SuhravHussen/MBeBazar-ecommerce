import styles from '../../../../styles/components/bottomNav/megaMenu/megaMenu.module.scss';
import { Link } from '../../../../utils/commonImports';

export default function MegaList() {
    const categories = [
        {
            header: 'Fruits & Vegetables',
            list: [
                'Potato',
                'Mango',
                'Cauliflower',
                'Strawberries Package',
                'Pineapple Imported',
                'Lettuce',
            ],
        },
        {
            header: 'Breakfast & Dairy',
            list: [
                'Milk & Flavoured Milk',
                'Butter and Margarine',
                'Eggs substitutes',
                'Bread',
                'Snack',
                'Biscuits',
            ],
        },
        {
            header: 'Meat & Seafood',
            list: ['Beef Meat', 'Chicken meat', 'Mutton Meat', 'Elisha', 'Salmon', 'Sea Food'],
        },
    ];

    return (
        <div className={styles.megaListContainer}>
            {categories.map((c) => (
                <div className={styles.colum}>
                    <h2 className={styles.categoryHeader}>{c.header}</h2>
                    <div className={styles.categories}>
                        {c.list.map((l) => (
                            <Link
                                href={{
                                    pathname: '/products',
                                    query: { category: `${c.header}-${l}` },
                                }}
                            >
                                <p className={styles.category}>{l}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <div className={styles.bannerBox}>
                <div className={styles.banner}>
                    <div className={styles.leftSide}>
                        <h3>HOT DEALS</h3>
                        <h2>Don&apos;t miss trending</h2>
                        <button type="button">Shop Now</button>
                    </div>
                    <div className={styles.rightSide}>
                        <h1>25%</h1>
                        <h3>off</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
