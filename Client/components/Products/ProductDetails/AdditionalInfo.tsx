/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { DateTime } from 'luxon';
import { SyntheticEvent } from 'react';
import { review } from '../../../pages/product-details/[id]';
import styles from '../../../styles/components/products/additionalInfo.module.scss';
import { Image, Rating, useState } from '../../../utils/commonImports';

export default function AdditionalInfo({
    details,
    reviews,
    productId,
}: {
    details: string;
    reviews: review[];
    productId: string;
}) {
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
            {active === 'description' && <div className={styles.description}>{details}</div>}
            {active === 'reviews' && (
                <>
                    <div className={styles.reviews}>
                        {reviews.length > 0 ? (
                            reviews.map((r) => (
                                <div className={styles.singleReview}>
                                    <div className={styles.colum1}>
                                        <div className={styles.image}>
                                            <Image
                                                src={
                                                    r.user.avatar
                                                        ? r.user.avatar
                                                        : '/images/default/user.jpeg'
                                                }
                                                layout="fill"
                                                placeholder="blur"
                                                blurDataURL="/images/default/user.jpeg"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.column2}>
                                        <div className={styles.firstRow}>
                                            <small>
                                                {DateTime.fromISO(r.updatedAt).toLocaleString(
                                                    DateTime.DATE_HUGE
                                                )}
                                            </small>
                                            <h5>
                                                <Rating readOnly precision={0.5} value={r.rating} />
                                            </h5>
                                        </div>
                                        <div className={styles.secondRow}>{r.review}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    backgroundColor: '#f5f5f5',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                }}
                            >
                                <h3>No Reviews found </h3>
                            </div>
                        )}
                    </div>
                    {['629ef076d43eb983f88afcb1'].includes(productId) && (
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
                    )}
                </>
            )}
        </div>
    );
}
