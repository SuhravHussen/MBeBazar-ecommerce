import styles from '../../styles/components/common/sectionHeader.module.scss';
import { React } from '../../utils/commonImports';

export default function SectionHeader({ children }: { children: React.ReactNode }) {
    return <div className={styles.heading}>{children}</div>;
}
