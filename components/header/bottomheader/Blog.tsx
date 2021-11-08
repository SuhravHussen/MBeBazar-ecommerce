import ExpandMore from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import styles from '../../../styles/components/shop.module.scss';
import { LightTooltip } from '../../styled/styled';

const ShopList = dynamic(() => import('./ShopList'), {
    loading: () => <p>loading</p>,
});

export default function Blogs() {
    return (
        <LightTooltip title={<ShopList />} arrow placement="bottom-start">
            <p className={styles.shopsMenu}>
                Blogs <ExpandMore />
            </p>
        </LightTooltip>
    );
}
