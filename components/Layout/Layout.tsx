import React from 'react';
import { ReactNode } from 'react-is/node_modules/@types/react';
import styles from '../../styles/components/layout/layout.module.scss';
import Header from '../header/Heading';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div className={styles.layout}>{children}</div>
        </>
    );
}
