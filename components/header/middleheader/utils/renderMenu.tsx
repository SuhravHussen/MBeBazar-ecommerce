import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface iMenu {
    anchor: HTMLElement | null;
    open: boolean;
    handleMenuClose: any;
}

export const RenderProfileMenu = ({ anchor, open, handleMenuClose }: iMenu) => (
    <>
        <Menu
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
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

export const RenderMobileMenu = ({ anchor, open, handleMenuClose }: iMenu) => (
    <Menu
        anchorEl={anchor}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={open}
        onClose={handleMenuClose}
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
        <MenuItem onClick={handleMenuClose}>
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

export const RenderNotification = ({ anchor, open, handleMenuClose }: iMenu) => (
    <>
        <Menu
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleMenuClose}
        >
            <div>
                <h5>notification</h5>
            </div>
        </Menu>
    </>
);
