import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import * as React from 'react';
import { GiBlender, GiElectric, GiForkKnifeSpoon, GiKitchenKnives, GiTomato } from 'react-icons/gi';
import styles from '../../../styles/components/middleNav/drawer.module.scss';
import {
    DrawerInfoBox,
    MyListItemButton,
    MyListItemIcon,
    // eslint-disable-next-line prettier/prettier
    MyListItemText
} from '../../styled/styled';
import MyList from './List';

interface props {
    drawerOpen: boolean;

    toggleDrawer: () => void;
}

export default function MyDrawer({ drawerOpen, toggleDrawer }: props) {
    const [hamburgerOpen, setHamburgurOpen] = React.useState(true);

    const catagories = [
        {
            primaryIcon: <FoodBankRoundedIcon />,
            primaryText: 'Foods',
            collapses: [
                { text: 'Snack', icon: <FastfoodRoundedIcon /> },
                {
                    text: 'Vagetables',
                    icon: <GiTomato />,
                },
            ],
        },

        {
            primaryIcon: <LocalMallIcon />,
            primaryText: 'Accessories',
            collapses: [
                { text: 'Knife', icon: <GiKitchenKnives /> },
                {
                    text: 'Fork',
                    icon: <GiForkKnifeSpoon />,
                },
            ],
        },
        {
            primaryIcon: <GiElectric />,
            primaryText: 'Electronics',
            collapses: [
                {
                    text: 'Blender',
                    icon: <GiBlender />,
                },
            ],
        },
    ];

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
                                    }, 270);
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
                <DrawerInfoBox>
                    <List>
                        <MyListItemButton>
                            <MyListItemIcon>
                                <RoomIcon />
                            </MyListItemIcon>
                            <MyListItemText>Our Location</MyListItemText>
                        </MyListItemButton>
                        <MyListItemButton>
                            <MyListItemIcon>
                                <DraftsIcon />
                            </MyListItemIcon>
                            <MyListItemText>nest@ecommerce.com</MyListItemText>
                        </MyListItemButton>
                        <MyListItemButton>
                            <MyListItemIcon>
                                <CallIcon />
                            </MyListItemIcon>
                            <MyListItemText>(+01)-2345-6789</MyListItemText>
                        </MyListItemButton>
                    </List>
                </DrawerInfoBox>
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
