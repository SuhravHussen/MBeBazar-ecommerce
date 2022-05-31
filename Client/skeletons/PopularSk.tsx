import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/components/common/card/card.module.scss';

export default function PopularSk() {
    return (
        <div className={styles.singleProduct}>
            <div className={styles.image}>
                <Skeleton variant="text" height={244} width={244} />
            </div>
            <small className={styles.category}>
                {' '}
                <Skeleton variant="text" />
            </small>
            <h3 className={styles.title}>
                {' '}
                <Skeleton variant="text" />
            </h3>
            <div style={{ display: 'flex' }}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </div>
            <p>
                <Skeleton variant="text" />
            </p>
            <div className={styles.bottom}>
                <h2>
                    {' '}
                    <Skeleton variant="text" />
                </h2>
                <del>
                    {' '}
                    <Skeleton variant="text" />
                </del>

                <Skeleton variant="text" />
            </div>
        </div>
    );
}
