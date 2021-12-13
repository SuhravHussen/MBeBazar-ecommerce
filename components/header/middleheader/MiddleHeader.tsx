import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';
import styles from '../../../styles/components/middleNav/dekstopmiddlenav.module.scss';
import { dynamic, Image } from '../../../utils/commonImports';
import { useWindowDimensions } from '../../../utils/customHooks';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styled/middleNav';
import Notifications from './Notifications';
import { RenderMobileMenu, RenderProfileMenu } from './utils/renderMenu';

const MyDrawer = dynamic(() => import('./Drawer/Drawer'));

export default function MiddleHeader() {
    // states
    const [ProfileEl, setProfileEl] = React.useState<null | HTMLElement>(null);
    const { width } = useWindowDimensions();
    const isProfileMenuOpen = Boolean(ProfileEl);
    const [notificationOpen, setNotificationOpen] = React.useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [hamburgerOpen, setHamburgurOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // open or close drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // open or close menus or notifications
    const handleOpenClose = (callback: React.Dispatch<React.SetStateAction<any>>, param: any) => {
        callback(param);
    };

    return (
        <>
            {width < 960 && <MyDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />}
            <Box className={styles.dekstopNavContainer} sx={{ flexGrow: 1, position: 'sticky' }}>
                {/* app bar */}
                <AppBar className={styles.appBar} position="sticky" elevation={0}>
                    <Toolbar className={styles.toolbar}>
                        {/* drawer icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                sx={{ mr: 2, color: 'myColor.main' }}
                            >
                                <Hamburger
                                    size={28}
                                    rounded
                                    toggled={hamburgerOpen}
                                    toggle={() => setHamburgurOpen(true)}
                                    onToggle={(t) => {
                                        if (t) {
                                            setTimeout(() => {
                                                toggleDrawer();
                                                setHamburgurOpen(false);
                                            }, 270);
                                        }
                                    }}
                                />
                            </IconButton>
                        </Box>
                        {/* logo */}
                        <span className={styles.logo}>
                            <Image
                                src="/images/logos/nestLogo.svg"
                                width={180}
                                height={100}
                                placeholder="blur"
                                blurDataURL="/images/logos/nestLogo.svg"
                            />
                        </span>
                        {/* search bar */}
                        <Search className={styles.searchContainer}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase className={styles.searchInput} placeholder="Search…" />
                        </Search>
                        {/* right icons */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon className={styles.icons} />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <ClickAwayListener
                                    onClickAway={() => handleOpenClose(setNotificationOpen, false)}
                                >
                                    <Tooltip
                                        title={<Notifications />}
                                        arrow
                                        onClose={() => handleOpenClose(setNotificationOpen, false)}
                                        open={notificationOpen}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        placement="bottom"
                                        className={styles.tooltip}
                                    >
                                        <Badge badgeContent={17} color="error">
                                            <NotificationsIcon
                                                className={styles.icons}
                                                onClick={() =>
                                                    handleOpenClose(setNotificationOpen, true)
                                                }
                                            />
                                        </Badge>
                                    </Tooltip>
                                </ClickAwayListener>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-haspopup="true"
                                onClick={(e) => handleOpenClose(setProfileEl, e.currentTarget)}
                                color="inherit"
                            >
                                <AccountCircle className={styles.icons} />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                onClick={(e) =>
                                    handleOpenClose(setMobileMoreAnchorEl, e.currentTarget)
                                }
                                color="inherit"
                            >
                                <MoreHorizRoundedIcon sx={{ color: 'myColor.main' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                <RenderProfileMenu
                    open={isProfileMenuOpen}
                    anchor={ProfileEl}
                    handleMenuClose={() => handleOpenClose(setProfileEl, null)}
                />

                <RenderMobileMenu
                    open={isMobileMenuOpen}
                    anchor={mobileMoreAnchorEl}
                    handleMenuClose={() => handleOpenClose(setMobileMoreAnchorEl, null)}
                />
            </Box>
            <Divider />
        </>
    );
}
