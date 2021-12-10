import { IoIosArrowForward } from 'react-icons/io';
import data from '../../../FakeData/Data';
import deal1 from '../../../public/images/dealsOfDay/dealofDay1.png';
import deal2 from '../../../public/images/dealsOfDay/dealofDay2.png';
import deal3 from '../../../public/images/dealsOfDay/dealofDay3.png';
import deal4 from '../../../public/images/dealsOfDay/dealofDay4.png';
import styles from '../../../styles/components/Home/dealsOfTheDay/dealsOfTheDay.module.scss';
import {
    Fade,
    FiShoppingCart,
    Image,
    Rating,
    SectionHeader,
    useEffect,
    // eslint-disable-next-line prettier/prettier
    useState
} from '../../../utils/commonImports';
import Countdown from './Countdown';

export default function DealsOftheDay() {
    const [products, setProducts] = useState<any>([]);
    const bgImages = [deal1, deal2, deal3, deal4];
    useEffect(() => {
        const deals = data.filter((d) => {
            if (d.featured.indexOf('dealOfTheDay') === -1) {
                return false;
            }
            return true;
        });

        setProducts(deals.slice(0, 4));
    }, []);

    return (
        <div className={styles.dealsContainer}>
            <SectionHeader>
                <h1>Deals Of The Day</h1>
                <h3>
                    All Deals <IoIosArrowForward className={styles.arrowIcon} />
                </h3>
            </SectionHeader>
            <div className={styles.deals}>
                {products.map((p: any, i: any) => (
                    <Fade className={styles.singleDealFade} direction="left" key={p.id}>
                        <div className={styles.singleDeal}>
                            <div className={styles.image}>
                                <Image
                                    src={bgImages[i]}
                                    layout="fill"
                                    placeholder="blur"
                                    blurDataURL="/images/dealsOfDay/dealofDay1.png"
                                />
                                <Countdown />
                            </div>
                            <div className={styles.content}>
                                <h3>{p.title}</h3>
                                <h4>
                                    <Rating name="read-only" value={4.5} precision={0.1} readOnly />
                                    <p>(32)</p>
                                </h4>
                                <p>
                                    By <span>NestFood</span>
                                </p>

                                <div className={styles.bottom}>
                                    <h2>${p.offerPrice}</h2>
                                    <del>${p.price}</del>

                                    <button type="button" className={styles.button}>
                                        <FiShoppingCart /> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
}
