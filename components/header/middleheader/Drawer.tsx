import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import * as React from 'react';
import styles from '../../../styles/components/drawer.module.scss';

interface props {
    drawerOpen: boolean;

    toggleDrawer: () => void;
}

export default function MyDrawer({ drawerOpen, toggleDrawer }: props) {
    const [hamburgerOpen, setHamburgurOpen] = React.useState(true);

    return (
        <div>
            <Drawer open={drawerOpen} elevation={1} onClose={toggleDrawer}>
                <div className={styles.drawerContainer}>
                    <div className={styles.header}>
                        <Image
                            src="https://res.cloudinary.com/doircnueq/image/upload/v1636035369/MBeCommerece/logos/logo_nbh5ke_hwub6l.svg"
                            width={130}
                            height={90}
                        />
                        <span className={styles.icon}>
                            <Hamburger
                                size={20}
                                rounded
                                toggled={hamburgerOpen}
                                toggle={() => setHamburgurOpen(false)}
                                onToggle={(t) => {
                                    if (!t) {
                                        setTimeout(() => {
                                            toggleDrawer();
                                            setHamburgurOpen(true);
                                        }, 270);
                                    }
                                }}
                            />
                        </span>
                    </div>
                    <Divider />
                </div>
            </Drawer>
        </div>
    );
}
