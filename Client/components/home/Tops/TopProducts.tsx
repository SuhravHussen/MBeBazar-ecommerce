import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/Home/tops/tops.module.scss';
import { useState } from '../../../utils/commonImports';
import SingleColumn from './SingleColumn/SingleColumn';

export default function TopProducts({ mostSell }: { mostSell: iProduct[] }) {
    const [topSelling] = useState<iProduct[]>(mostSell);

    return (
        <div className={styles.topsContainer}>
            <SingleColumn type="Top Selling" products={topSelling.slice(0, 8)} />
            <SingleColumn type="Trending Products" products={topSelling.slice(0, 8)} />
            <SingleColumn type="Recently Added" products={topSelling.slice(0, 8)} />
            <SingleColumn type="Top Rated" products={topSelling.slice(0, 8)} />
        </div>
    );
}
