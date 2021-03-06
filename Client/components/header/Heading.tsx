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
    ssr: false,
});

const Bottomheader = dynamic(() => import('./bottomheader/Bottomheader'), {
    loading: () => <BottomHeaderSK />,
    ssr: false,
});

export default function Heading() {
    const { width }: { width: number } = useWindowDimensions();

    return (
        <div className={styles.header}>
            <Announce />
            {width > 960 && <TopHeader />}
            <Sticky stickyStyle={{ zIndex: 10, backgroundColor: 'white' }}>
                <MiddleHeader />
            </Sticky>
            {width > 960 && <Bottomheader />}
        </div>
    );
}
