import Sticky from 'react-sticky-el';
import styles from '../../styles/components/header/header.module.scss';
import { useWindowDimensions } from '../../utils/customHooks';
import Bottomheader from './bottomheader/Bottomheader';
import MiddleHeader from './middleheader/MiddleHeader';
import Announce from './topheader/Announce';

import TopHeader from './topheader/Topheader';

export default function Heading() {
    const { width }: { width: number } = useWindowDimensions();

    return (
        <div className={styles.header}>
            <div className={styles.announcement}>
                <Announce />
            </div>
            <TopHeader />
            <div style={{ position: 'relative', zIndex: 3 }}>
                <Sticky stickyStyle={{ zIndex: 1, backgroundColor: 'white' }}>
                    <MiddleHeader />
                </Sticky>
            </div>
            {width > 960 && <Bottomheader />}
        </div>
    );
}
