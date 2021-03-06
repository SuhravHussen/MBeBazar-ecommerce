import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Sling as Hamburger } from 'hamburger-react';
import * as React from 'react';
import styles from '../../../styles/components/middleNav/dekstopmiddlenav.module.scss';
import { dynamic, Image } from '../../../utils/commonImports';
import { useWindowDimensions } from '../../../utils/customHooks';
import ResponsiveDialog from '../../Common/Login-SignUp/Dialog';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styled/middleNav';
import CartDrawer from './Cart/CartDrawer';
import { RenderMobileMenu } from './utils/renderMenu';

const MyDrawer = dynamic(() => import('./Drawer/Drawer'));

export default function MiddleHeader() {
    // states

    const { width } = useWindowDimensions();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [hamburgerOpen, setHamburgurOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [cartOpen, setCartOpen] = React.useState(false);
    const [loginDialogueOpen, setLoginDialogueOpen] = React.useState(false);
    // open or close drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // open or close menus or notifications
    const handleOpenClose = (callback: React.Dispatch<React.SetStateAction<any>>, param: any) => {
        callback(param);
    };

    console.log(cartOpen, 'cart');
    return (
        <>
            {/* drawer/modals  */}
            {width < 960 && <MyDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />}
            <CartDrawer open={cartOpen} setOpen={setCartOpen} />
            <ResponsiveDialog open={loginDialogueOpen} setOpen={setLoginDialogueOpen} />
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
                            <StyledInputBase className={styles.searchInput} placeholder="Search???" />
                        </Search>
                        {/* right icons */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon className={styles.icons} />
                                </Badge>
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={17} color="error">
                                    <ShoppingCartOutlinedIcon
                                        className={styles.icons}
                                        onClick={() => setCartOpen(true)}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => setLoginDialogueOpen(true)}
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
                <RenderMobileMenu
                    handleCart={setCartOpen}
                    open={isMobileMenuOpen}
                    anchor={mobileMoreAnchorEl}
                    handleMenuClose={() => handleOpenClose(setMobileMoreAnchorEl, null)}
                    handleProfile={() => setLoginDialogueOpen(true)}
                />
            </Box>
            <Divider />
        </>
    );
}
