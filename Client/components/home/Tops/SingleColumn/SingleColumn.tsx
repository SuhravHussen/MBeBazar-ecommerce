import styles from '../../../../styles/components/Home/tops/singleColumn.module.scss';
import { Image, Rating } from '../../../../utils/commonImports';

type IPros = {
    type: string;
    products: {
        image: string;
        rating: number;
        title: string;
        id: 'string';
        price: number;
        offerPrice: number;
        reviewsNumber: number;
    }[];
};

export default function SingleColumn({ type, products }: IPros) {
    return (
        <div className={styles.column}>
            <h3>{type}</h3>
            <div className={styles.products}>
                {products.map((p) => (
                    <div className={styles.row}>
                        <div className={styles.image}>
                            <Image layout="fill" src={p?.image} />
                        </div>
                        <div className={styles.detail}>
                            <h4>{p?.title}</h4>
                            <div className={styles.ratings}>
                                <Rating readOnly precision={0.5} value={p?.rating} />{' '}
                                <p>({p?.reviewsNumber})</p>
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
