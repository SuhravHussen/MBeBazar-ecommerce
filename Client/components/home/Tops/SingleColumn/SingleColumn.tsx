import { iProduct } from '../../../../models/product.interface';
import styles from '../../../../styles/components/Home/tops/singleColumn.module.scss';
import { Image, Rating } from '../../../../utils/commonImports';

type IPros = {
    type: string;
    products: iProduct[];
};

export default function SingleColumn({ type, products }: IPros) {
    return (
        <div className={styles.column}>
            <h3>{type}</h3>
            <div className={styles.products}>
                {products.map((p) => (
                    <div key={p._id} className={styles.row}>
                        <div className={styles.image}>
                            <Image layout="fill" src={p.images[0]} />
                        </div>
                        <div className={styles.detail}>
                            <h4>{p?.title}</h4>
                            <div className={styles.ratings}>
                                <Rating readOnly precision={0.5} value={5} /> <p>23</p>
                            </div>
                            <div className={styles.prices}>
                                <h3>${p?.offerPrice}</h3>
                                <del>${p?.price}</del>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
