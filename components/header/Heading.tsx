import dynamic from 'next/dynamic';
import styles from '../../styles/components/header/header.module.scss';
import Announce from './topheader/Announce';

const TopHeader = dynamic(() => import('./topheader/Topheader'), {
    loading: () => <p>loading</p>,
});
const MiddleHeader = dynamic(() => import('./middleheader/MiddleHeader'), {
    loading: () => <p>loading</p>,
});

const Bottomheader = dynamic(() => import('./bottomheader/Bottomheader'));

export default function Heading() {
    return (
        <div className={styles.header}>
            <Announce />
            <TopHeader />
            <MiddleHeader />
            <Bottomheader />
        </div>
    );
}
