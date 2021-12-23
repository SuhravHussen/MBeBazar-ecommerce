/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { DateTime } from 'luxon';
import { SyntheticEvent } from 'react';
import styles from '../../../styles/components/products/additionalInfo.module.scss';
import { Image, Rating, useState } from '../../../utils/commonImports';

export default function AdditionalInfo() {
    const [active, setActive] = useState('description');
    const [customerRating, setCustomerRating] = useState<number | null>(5);
    const handleChangeButton = (v: string) => {
        setActive(v);
    };

    return (
        <div className={styles.additionalInfoBox}>
            <div className={styles.header}>
                <h3
                    onClick={() => handleChangeButton('description')}
                    className={active === 'description' ? styles.active : ''}
                >
                    Description
                </h3>
                <h3
                    onClick={() => handleChangeButton('reviews')}
                    className={active === 'reviews' ? styles.active : ''}
                >
                    Reviews
                </h3>
            </div>
            {active === 'description' && (
                <div className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur tempore quas
                    totam vero. Corporis impedit cumque vitae? Accusamus, nostrum quos, harum quod
                    blanditiis totam corrupti quam autem ex eius perspiciatis tempora laboriosam
                    magni doloremque. Recusandae blanditiis molestiae suscipit numquam libero
                    corrupti, ullam maiores, placeat odit eveniet, aperiam sint. Repudiandae labore
                    perspiciatis necessitatibus recusandae, ullam pariatur, dicta eaque vitae ad
                    dignissimos laboriosam saepe ratione mollitia provident dolore praesentium
                    beatae voluptatibus, omnis sunt sapiente modi esse enim vero. Optio quibusdam,
                    ad corrupti id nesciunt qui voluptatibus libero possimus ab veritatis odio
                    doloribus magnam ducimus nisi unde similique fuga necessitatibus laboriosam!
                    Amet, eveniet architecto officiis quaerat voluptate delectus sunt, quisquam
                    eius, reiciendis distinctio dicta necessitatibus quod veniam! Eveniet, nostrum!
                    Illo odio unde optio tempora ipsa! Neque repudiandae quod repellendus soluta
                    vero ut illum! Blanditiis eum nihil praesentium totam, ex natus nemo ipsum
                    numquam, neque dolorem iste! Nihil consectetur beatae sit aut blanditiis? Cum
                    sapiente quod voluptatem vel, aliquam dolorem id adipisci. Magnam culpa
                    perferendis reiciendis exercitationem odio nobis harum voluptate officiis
                    quaerat dolorem nesciunt, asperiores animi, quos totam libero. Optio sint
                    aspernatur accusamus aperiam eius! Eum in quia error officiis numquam facilis
                    tempore sapiente soluta ea, quam quas reprehenderit laborum a voluptate
                    voluptates.
                </div>
            )}
            {active === 'reviews' && (
                <>
                    <div className={styles.reviews}>
                        <div className={styles.singleReview}>
                            <div className={styles.colum1}>
                                <div className={styles.image}>
                                    <Image
                                        src="/images/default/user.jpeg"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/images/default/user.jpeg"
                                    />
                                </div>
                            </div>
                            <div className={styles.column2}>
                                <div className={styles.firstRow}>
                                    <small>
                                        {DateTime.fromISO('2017-05-15T08:30:00').toLocaleString(
                                            DateTime.DATE_HUGE
                                        )}
                                    </small>
                                    <h5>
                                        <Rating readOnly precision={0.5} value={3.5} />
                                    </h5>
                                </div>
                                <div className={styles.secondRow}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus, suscipit exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi commodi dignissimos sequi
                                    repudiandae minus ab deleniti totam officia id incidunt?
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleReview}>
                            <div className={styles.colum1}>
                                <div className={styles.image}>
                                    <Image
                                        src="/images/default/user.jpeg"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/images/default/user.jpeg"
                                    />
                                </div>
                            </div>
                            <div className={styles.column2}>
                                <div className={styles.firstRow}>
                                    <small>
                                        {DateTime.fromISO('2017-05-15T08:30:00').toLocaleString(
                                            DateTime.DATE_HUGE
                                        )}
                                    </small>
                                    <h5>
                                        <Rating precision={0.5} value={3.5} />
                                    </h5>
                                </div>
                                <div className={styles.secondRow}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus, suscipit exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi commodi dignissimos sequi
                                    repudiandae minus ab deleniti totam officia id incidunt?
                                </div>
                            </div>
                        </div>
                        <div className={styles.singleReview}>
                            <div className={styles.colum1}>
                                <div className={styles.image}>
                                    <Image
                                        src="/images/default/user.jpeg"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/images/default/user.jpeg"
                                    />
                                </div>
                            </div>
                            <div className={styles.column2}>
                                <div className={styles.firstRow}>
                                    <small>
                                        {DateTime.fromISO('2017-05-15T08:30:00').toLocaleString(
                                            DateTime.DATE_HUGE
                                        )}
                                    </small>
                                    <h5>
                                        <Rating precision={0.5} value={3.5} />
                                    </h5>
                                </div>
                                <div className={styles.secondRow}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus, suscipit exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi commodi dignissimos sequi
                                    repudiandae minus ab deleniti totam officia id incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.addReview}>
                        <h1>Add your Review</h1>
                        <Rating
                            precision={0.5}
                            defaultValue={5}
                            onChange={(e: SyntheticEvent<Element, Event>, v: number | null) =>
                                setCustomerRating(v)
                            }
                        />
                        {customerRating}
                        <input type="text" />
                        <button type="button">Submit</button>
                    </div>
                </>
            )}
        </div>
    );
}
