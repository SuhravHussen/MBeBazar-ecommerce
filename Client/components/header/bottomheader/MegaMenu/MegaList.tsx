import styles from '../../../../styles/components/bottomNav/megaMenu/megaMenu.module.scss';

export default function MegaList() {
    return (
        <div className={styles.megaListContainer}>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Fruits & Vegetables</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Potato</p>
                    <p className={styles.category}>Mango</p>
                    <p className={styles.category}>Cauliflower</p>
                    <p className={styles.category}>Strawberries Package</p>
                    <p className={styles.category}>Pineapple Imported</p>
                    <p className={styles.category}>Lettuce</p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Breakfast & Dairy</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Milk & Flavoured Milk</p>
                    <p className={styles.category}>Butter and Margarine</p>
                    <p className={styles.category}>Eggs substitutes</p>
                    <p className={styles.category}>Bread</p>
                    <p className={styles.category}>Snack</p>
                    <p className={styles.category}>Biscuits</p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>Meat & Seafood</h2>
                <div className={styles.categories}>
                    <p className={styles.category}>Beef Meat</p>
                    <p className={styles.category}>Chicken meat</p>
                    <p className={styles.category}>Mutton Meat</p>
                    <p className={styles.category}>Elisha</p>
                    <p className={styles.category}>Salmon</p>
                    <p className={styles.category}>Sea Food</p>
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
