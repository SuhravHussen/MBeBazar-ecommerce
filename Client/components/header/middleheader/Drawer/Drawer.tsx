import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import { catagories } from './catagories';

import { useRouter } from 'next/router';
import { memo } from 'react';
import styles from '../../../../styles/components/middleNav/drawer.module.scss';
import MyList from './List';

interface props {
    drawerOpen: boolean;
    toggleDrawer: () => void;
}


 function MyDrawer({ drawerOpen, toggleDrawer }: props) {

    const router  = useRouter()
    return (
        <Drawer open={drawerOpen} elevation={1} onClose={toggleDrawer}>
            <div className={styles.drawerContainer}>
                <div className={styles.header}>
            
                 <p style={{
                    cursor: 'pointer',
                 }}
                 onClick={() => {
                    router.push('/')
                    toggleDrawer()
                 }}
                 >
                 <Image  src="/images/logos/MBeBAZAR.png" width={130} height={90} />
                 </p>
          
                    <span className={styles.icon}>
                        <Hamburger
                            size={20}
                            rounded
                            toggled
                            toggle={() => {
                                toggleDrawer();
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
                                toggleDrawer={toggleDrawer}
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

export default memo(MyDrawer)