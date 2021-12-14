import data from '../../../FakeData/Data';
import styles from '../../../styles/components/Home/tops/tops.module.scss';
import { useEffect, useState } from '../../../utils/commonImports';
import SingleColumn from './SingleColumn/SingleColumn';

export default function TopProducts() {
    const [topSelling, setTopSelling] = useState<any>([]);
    const [trending, setTrending] = useState<any>([]);
    const [recent, setRecent] = useState<any>([]);
    const [topRated, setTopRated] = useState<any>([]);

    useEffect(() => {
        const topSellingProducts = data.slice(0, 3).map((d) => ({
            title: d.title,
            rating: 4.5,
            image: d.images[0],
            id: d.id,
            price: d.price,
            offerPrice: d.offerPrice,
            reviewsNumber: d.reviews,
        }));
        setTopSelling(topSellingProducts);
        const trendingProducts = data.slice(3, 6).map((d) => ({
            title: d.title,
            rating: 4.5,
            image: d.images[0],
            id: d.id,
            price: d.price,
            offerPrice: d.offerPrice,
            reviewsNumber: d.reviews,
        }));
        setTrending(trendingProducts);
        const recentProducts = data.slice(6, 9).map((d) => ({
            title: d.title,
            rating: 3.5,
            image: d.images[0],
            id: d.id,
            price: d.price,
            offerPrice: d.offerPrice,
            reviewsNumber: d.reviews,
        }));
        setRecent(recentProducts);
        const ratedProducts = data.slice(9, 12).map((d) => ({
            title: d.title,
            rating: 5,
            image: d.images[0],
            id: d.id,
            price: d.price,
            offerPrice: d.offerPrice,
            reviewsNumber: d.reviews,
        }));
        setTopRated(ratedProducts);
    }, []);

    return (
        <div className={styles.topsContainer}>
            <SingleColumn type="Top Selling" products={topSelling} />
            <SingleColumn type="Trending Products" products={trending} />
            <SingleColumn type="Recently Added" products={recent} />
            <SingleColumn type="Top Rated" products={topRated} />
        </div>
    );
}
