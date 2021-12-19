import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from '../../styles/components/products/productsBanner.module.scss';
import { Image } from '../../utils/commonImports';

export default function ProductsBanner() {
    const router = useRouter();

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

                    <div className={styles.route}>
                        <MdArrowForwardIos /> <span>{router.query.category}</span>
                    </div>
                    <div className={styles.route}>
                        <MdArrowForwardIos /> <span>{router.query.subCategory}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
