import { ReactNode } from 'react-is/node_modules/@types/react';
import styles from '../../styles/components/layout/layout.module.scss';
import Footer from '../Common/Footer/Footer';
import Header from '../header/Heading';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main className={styles.layout}>
                {children} <Footer />
            </main>
        </>
    );
}
