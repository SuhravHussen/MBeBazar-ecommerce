import React from 'react';
import styles from '../../../../styles/components/checkout/common/detailsContiner.module.scss';

export default function DetailsContainer({
    children,
    number,
    heading,
}: {
    children: React.ReactNode;
    number: string;
    heading: string;
}) {
    return (
        <div className={styles.detailsContainer}>
            <h3>
                {number}. {heading}
            </h3>

            <div className={styles.inputs}>{children}</div>
        </div>
    );
}
