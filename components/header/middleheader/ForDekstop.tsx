import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import * as React from 'react';
import styles from '../../../styles/components/dekstopmiddlenav.module.scss';
import MyDrawer from './Drawer';
import Notifications from './Notifications';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [notificationEl, setNotificationEl] = React.useState<null | HTMLElement>(null);

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
    const renderMenu = (
        <>
            <Menu
                anchorEl={anchorEl}
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
                open={isProfileMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Log out</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );

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
            <MyDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            <Box className={styles.dekstopNavContainer} sx={{ flexGrow: 1 }}>
                <AppBar className={styles.appBar} position="static">
                    <Toolbar className={styles.toolbar}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
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
                                src="https://res.cloudinary.com/doircnueq/image/upload/v1635915421/MBeCommerece/logos/logo_ebkuif.svg"
                                width={100}
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
                                    <MailIcon />
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
                                            <NotificationsIcon onClick={handleTooltipOpen} />
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
                                <AccountCircle />
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
                                <MoreHorizRoundedIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                {renderMenu}
                {renderNotification}
                {renderMobileMenu}
            </Box>
        </>
    );
}
