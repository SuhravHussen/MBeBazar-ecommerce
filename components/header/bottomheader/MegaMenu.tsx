import ExpandMore from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import styles from '../../../styles/components/bottomNav/shop.module.scss';
import { LightTooltip } from '../../styled/styled';

const MegaList = dynamic(() => import('./MegaList'), {
    loading: () => <p>loading</p>,
});

export default function MegaMenu() {
    return (
        <LightTooltip title={<MegaList />} arrow>
            <p className={styles.shopsMenu}>
                Mega Menu <ExpandMore />
            </p>
        </LightTooltip>
    );
}
