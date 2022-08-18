import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import * as React from 'react';
import { catagories } from './catagories';

import styles from '../../../../styles/components/middleNav/drawer.module.scss';
import MyList from './List';

interface props {
    drawerOpen: boolean;

    toggleDrawer: () => void;
}

export default function MyDrawer({ drawerOpen, toggleDrawer }: props) {
    const [hamburgerOpen, setHamburgurOpen] = React.useState(true);

    return (
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
                                    }, 160);
                                }
                            }}
                        />
                    </span>
                </div>
                <Divider />
                <div className={styles.listContainer}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        {catagories.map((c) => (
                            <MyList
                                key={c.primaryText}
                                primaryIcon={c.primaryIcon}
                                primaryText={c.primaryText}
                                collapses={c.collapses}
                            />
                        ))}
                    </List>
                </div>

                <h3 className={styles.followText}>Follow Us</h3>
                <div className={styles.socialIcons}>
                    <FacebookIcon
                        sx={{
                            mr: 1,

                            '& :hover': {
                                color: 'myColor.grey',
                                transform: 'translateY(-10%)',
                                transition: '0.3s',
                            },
                        }}
                    />
                    <InstagramIcon
                        sx={{
                            mr: 1,

                            '& :hover': {
                                color: 'myColor.grey',
                                transform: 'translateY(-10%)',
                                transition: '0.3s',
                            },
                        }}
                    />
                    <TwitterIcon
                        sx={{
                            mr: 1,

                            '& :hover': {
                                color: 'myColor.grey',
                                transform: 'translateY(-10%)',
                                transition: '0.3s',
                            },
                        }}
                    />
                </div>
            </div>
        </Drawer>
    );
}
