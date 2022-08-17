import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from '../../styles/components/products/productsBanner.module.scss';
import { Image } from '../../utils/commonImports';

export default function ProductsBanner() {
    const router = useRouter();
    const categoryStr = router.query.category ? router.query.category : '';
    const categories = typeof categoryStr === 'string' ? categoryStr.split('-') : [];

    return (
        <div className={styles.bannerContainer}>
            <Image
                src="/images/banner/header-bg.png"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/banner/header-bg.png"
                alt="Top-Banner"
            />
            <div className={styles.content}>
                <h1>{router.query.subCategory || 'Category'}</h1>
                <div className={styles.routes}>
                    <div className={styles.route}>
                        <AiOutlineHome /> Home
                    </div>
                    {categories.map((category, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className={styles.route} key={index + Math.random()}>
                            <MdArrowForwardIos /> <span>{category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
