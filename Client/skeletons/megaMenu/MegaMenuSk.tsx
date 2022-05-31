import styles from '../../styles/components/bottomNav/megaMenu/megaMenu.module.scss';
import { Skeleton } from '../../utils/commonImports';

export default function MegaMenuSk() {
    return (
        <div className={styles.megaListContainer}>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>
                    <Skeleton variant="text" height={60} />
                </h2>
                <div className={styles.categories}>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>
                    <Skeleton variant="text" height={60} />
                </h2>
                <div className={styles.categories}>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                </div>
            </div>
            <div className={styles.colum}>
                <h2 className={styles.categoryHeader}>
                    <Skeleton variant="text" height={60} />
                </h2>
                <div className={styles.categories}>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                    <p className={styles.category}>
                        <Skeleton variant="text" />
                    </p>
                </div>
            </div>
            <div className={styles.bannerBox}>
                <Skeleton variant="text" height={400} width={400} />
            </div>
        </div>
    );
}
