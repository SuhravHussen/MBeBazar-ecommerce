import ExpandMore from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import styles from '../../../styles/components/bottomNav/shop.module.scss';
import { LightTooltip } from '../../styled/styled';

const ShopList = dynamic(() => import('./ShopList'), {
    loading: () => <p>loading</p>,
});

export default function Shops() {
    return (
        <LightTooltip title={<ShopList />} arrow placement="bottom-start">
            <p className={styles.shopsMenu}>
                Shops <ExpandMore />
            </p>
        </LightTooltip>
    );
}
