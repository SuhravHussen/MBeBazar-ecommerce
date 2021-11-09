import styles from '../../../styles/components/bottomNav/megaMenu/megaMenu.module.scss';

export default function MegaList() {
    return (
        <div className={styles.megaListContainer}>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Fruits & Vegetables</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Meat and poultry</p>
                    <p className={styles.category}>Fresh vegetables</p>
                    <p className={styles.category}>Herbs & seasonings</p>
                    <p className={styles.category}>Cuts & sprouts</p>
                    <p className={styles.category}>Exotic fruits & veggies</p>
                    <p className={styles.category}>package produce</p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Breakfast & Dairy</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Milk & Flavoured Milk</p>
                    <p className={styles.category}>Butter and Margarine</p>
                    <p className={styles.category}>Eggs substitutes</p>
                    <p className={styles.category}>Marmalades</p>
                    <p className={styles.category}>Sour Cream</p>
                    <p className={styles.category}>Cheese</p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Meat & Seafood</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Breakfast Sausage</p>
                    <p className={styles.category}>Dinner Sausage</p>
                    <p className={styles.category}>Chicken</p>
                    <p className={styles.category}>Sliced Deli Meat</p>
                    <p className={styles.category}>Wild Caught Fillets</p>
                    <p className={styles.category}>Crab and shellfish</p>
                </div>
            </div>
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
