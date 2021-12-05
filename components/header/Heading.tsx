import dynamic from 'next/dynamic';
import Sticky from 'react-sticky-el';
import BottomHeaderSK from '../../skeletons/megaMenu/BottomHeaderSK';
import styles from '../../styles/components/header/header.module.scss';
import { useWindowDimensions } from '../../utils/customHooks';
import Announce from './topheader/Announce';

const TopHeader = dynamic(() => import('./topheader/Topheader'), {
    loading: () => <p>loading</p>,
});
const MiddleHeader = dynamic(() => import('./middleheader/MiddleHeader'), {
    loading: () => <p>loading</p>,
});

const Bottomheader = dynamic(() => import('./bottomheader/Bottomheader'), {
    loading: () => <BottomHeaderSK />,
});

export default function Heading() {
    const { width }: { width: number } = useWindowDimensions();

    return (
        <div className={styles.header}>
            <Announce />
            <TopHeader />
            <Sticky stickyStyle={{ zIndex: 2 }}>
                <MiddleHeader />
            </Sticky>
            {width > 960 && <Bottomheader />}
        </div>
    );
}
