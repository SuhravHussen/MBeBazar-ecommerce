import BorderAllRoundedIcon from '@mui/icons-material/BorderAllRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useState } from 'react';
import { Arrow, useLayer } from 'react-laag';
import styles from '../../../styles/components/allcategories.module.scss';
import AllCategories from './AllCategories';

export default function MyToolTip() {
    const [isOpen, setIsOpen] = useState(false);

    const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
        isOpen,
        onOutsideClick: () => setIsOpen(false), // close the menu when the user clicks outside
        onDisappear: () => setIsOpen(false), // close the menu when the menu gets scrolled out of sight
        placement: 'bottom-start',
        auto: true,
        possiblePlacements: [
            'bottom-start',
            'bottom-end',
            'bottom-center',
            'right-end',
            'right-center',
            'right-start',
        ],
        triggerOffset: 17,
        containerOffset: 13,
        arrowOffset: 5,
    });

    return (
        <>
            <div
                className={styles.Label}
                role="button"
                tabIndex={0}
                onClick={() => setIsOpen(true)}
                {...triggerProps}
            >
                <BorderAllRoundedIcon /> All Categories{' '}
                {isOpen ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                {isOpen &&
                    renderLayer(
                        <div {...layerProps} className={styles.AllCategoriesContainer}>
                            <AllCategories />
                            <Arrow
                                {...arrowProps}
                                size={10}
                                roundness={1}
                                className={styles.arrow}
                                borderWidth={1}
                                borderColor="#3bb77e"
                            />
                        </div>
                    )}
            </div>
        </>
    );
}
