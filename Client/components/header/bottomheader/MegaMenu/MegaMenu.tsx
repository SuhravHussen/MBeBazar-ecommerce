import ExpandMore from '@mui/icons-material/ExpandMore';
import { Zoom } from '@mui/material';
import dynamic from 'next/dynamic';
import MegaMenuSk from '../../../../skeletons/megaMenu/MegaMenuSk';
import styles from '../../../../styles/components/bottomNav/shop.module.scss';
import { LightTooltip } from '../../../styled/bottomNav';

const MegaList = dynamic(() => import('./MegaList'), {
    loading: () => <MegaMenuSk />,
    ssr: false,
});

export default function MegaMenu() {
    return (
        <LightTooltip
            title={<MegaList />}
            arrow
            placement="bottom-start"
            TransitionComponent={Zoom}
        >
            <p className={styles.shopsMenu}>
                Mega Menu <ExpandMore />
            </p>
        </LightTooltip>
    );
}
