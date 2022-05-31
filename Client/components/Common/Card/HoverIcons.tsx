import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import styles from '../../../styles/components/common/card/card.module.scss';
import { GreenTooltip } from '../../styled/popularProducts';

export default function HoverIcons({
    index,
    setQuickViewDetails,
    setModalOpen,
}: {
    index: number;
    setQuickViewDetails: any;
    setModalOpen: any;
}) {
    // open quick view modal
    function HandleModal() {
        setQuickViewDetails(index);
        setModalOpen(true);
    }

    return (
        <div className={styles.hover} id="popularImageIcons">
            <GreenTooltip arrow placement="top" title="add to whish-list">
                <span role="button" tabIndex={0} onClick={HandleModal} className={styles.hoverIcon}>
                    <AiOutlineHeart />
                </span>
            </GreenTooltip>
            <GreenTooltip arrow placement="top" title="compare">
                <span role="button" tabIndex={0} onClick={HandleModal} className={styles.hoverIcon}>
                    <RiArrowLeftRightLine />
                </span>
            </GreenTooltip>
            <GreenTooltip arrow placement="top" title="quick view">
                <span role="button" tabIndex={0} onClick={HandleModal} className={styles.hoverIcon}>
                    <AiOutlineEye />
                </span>
            </GreenTooltip>
        </div>
    );
}
