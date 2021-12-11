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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';
import styles from '../../../styles/components/middleNav/dekstopmiddlenav.module.scss';
import { dynamic, Image } from '../../../utils/commonImports';
import { useWindowDimensions } from '../../../utils/customHooks';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styled/middleNav';
import Notifications from './Notifications';
import { RenderProfileMenu } from './utils/renderMenu';

const MyDrawer = dynamic(() => import('./Drawer/Drawer'));
export default function MiddleHeader() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [notificationEl, setNotificationEl] = React.useState<null | HTMLElement>(null);
    const { width } = useWindowDimensions();
    const isProfileMenuOpen = Boolean(anchorEl);
    const isNotificationMenuOpen = Boolean(notificationEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);

        const { id } = event.currentTarget;
        if (id === 'account') {
            setAnchorEl(event.currentTarget);
            setNotificationEl(null);
        } else if (id === 'notification') {
            setNotificationEl(event.currentTarget);
            setAnchorEl(null);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setNotificationEl(null);
    };

    const menuId = 'primary-search-account-menu';

    const renderNotification = (
        <>
            <Menu
                anchorEl={notificationEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isNotificationMenuOpen}
                onClose={handleMenuClose}
            >
                <div className={styles.notificationMen}>
                    <h5>notification</h5>
                </div>
            </Menu>
        </>
    );

    const [notificationOpen, setNotificationOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setNotificationOpen(false);
    };

    const handleTooltipOpen = () => {
        setNotificationOpen(true);
    };

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const [hamburgerOpen, setHamburgurOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            {width < 960 && <MyDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />}
            <Box className={styles.dekstopNavContainer} sx={{ flexGrow: 1, position: 'sticky' }}>
                <AppBar className={styles.appBar} position="sticky" elevation={0}>
                    <Toolbar className={styles.toolbar}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="open drawer"
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
                        <span className={styles.logo}>
                            <Image
                                src="https://res.cloudinary.com/doircnueq/image/upload/v1636035369/MBeCommerece/logos/logo_nbh5ke_hwub6l.svg"
                                width={180}
                                height={100}
                            />
                        </span>

                        <Search className={styles.searchContainer}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                className={styles.searchInput}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon className={styles.icons} />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                id="notification"
                                color="inherit"
                            >
                                <ClickAwayListener onClickAway={handleTooltipClose}>
                                    <Tooltip
                                        title={<Notifications />}
                                        arrow
                                        PopperProps={{
                                            disablePortal: true,
                                        }}
                                        onClose={handleTooltipClose}
                                        open={notificationOpen}
                                        disableFocusListener
                                        disableHoverListener
                                        disableTouchListener
                                        placement="bottom-end"
                                        className={styles.tooltip}
                                    >
                                        <Badge badgeContent={17} color="error">
                                            <NotificationsIcon
                                                className={styles.icons}
                                                onClick={handleTooltipOpen}
                                            />
                                        </Badge>
                                    </Tooltip>
                                </ClickAwayListener>
                            </IconButton>
                            <IconButton
                                id="account"
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle className={styles.icons} />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreHorizRoundedIcon sx={{ color: 'myColor.main' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                <RenderProfileMenu
                    open={isProfileMenuOpen}
                    anchor={anchorEl}
                    handleMenuClose={handleMenuClose}
                />
                {renderNotification}
                {renderMobileMenu}
            </Box>
            <Divider />
        </>
    );
}
