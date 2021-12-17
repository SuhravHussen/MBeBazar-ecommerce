import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from '../../styles/components/products/productsBanner.module.scss';
import { Image } from '../../utils/commonImports';

export default function ProductsBanner() {
    const router = useRouter();
    const queries = Object.values(router.query);
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
                <h1>{queries[queries.length - 1] || 'Category'}</h1>
                <div className={styles.routes}>
                    <div className={styles.route}>
                        <AiOutlineHome /> Home
                    </div>
                    {queries.map((q, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className={styles.route} key={i}>
                            <MdArrowForwardIos /> <span>{q}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
