import Sticky from 'react-sticky-el';
import styles from '../../styles/components/header/header.module.scss';
import { useWindowDimensions } from '../../utils/customHooks';
import MiddleHeader from './middleheader/MiddleHeader';
import Announce from './topheader/Announce';

import Bottomheader from './bottomheader/Bottomheader';
import TopHeader from './topheader/Topheader';

export default function Heading() {
    const { width }: { width: number } = useWindowDimensions();

    return (
        <div className={styles.header}>
            <div className={styles.announcement}>
                <Announce />
            </div>
            <TopHeader />
            <Sticky stickyStyle={{ zIndex: 10, backgroundColor: 'white' }}>
                <MiddleHeader />
            </Sticky>
            {width > 960 && <Bottomheader />}
        </div>
    );
}
