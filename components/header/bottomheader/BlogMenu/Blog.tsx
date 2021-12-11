import ExpandMore from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
import styles from '../../../../styles/components/bottomNav/shop.module.scss';
import { LightTooltip } from '../../../styled/bottomNav';

const BlogList = dynamic(() => import('./BlogList'), {
    loading: () => <p>loading</p>,
});

export default function Blogs() {
    return (
        <LightTooltip title={<BlogList />} arrow placement="bottom-end">
            <p className={styles.shopsMenu}>
                Blogs <ExpandMore />
            </p>
        </LightTooltip>
    );
}
