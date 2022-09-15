import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Link } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dispatch, SetStateAction } from 'react';
import { GoSignIn } from 'react-icons/go';

interface iMobileMenu {
  user: any;
  anchor: HTMLElement | null;
  open: boolean;
  handleMenuClose: any;
  handleCart: Dispatch<SetStateAction<boolean>>;
  handleProfile: any;
  setNotiAnchorEL: Dispatch<SetStateAction<HTMLElement | null>>;
}

// eslint-disable-next-line import/prefer-default-export
export const RenderMobileMenu = ({ anchor, open, handleMenuClose, handleCart, handleProfile, user, setNotiAnchorEL }: iMobileMenu) => (
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
    <MenuItem
      onClick={e => {
        setNotiAnchorEL(e.currentTarget);
      }}
    >
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem
      onClick={() => {
        handleMenuClose();
        handleCart(true);
      }}
    >
      <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="error">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <p>Cart</p>
    </MenuItem>
    {!user ? (
      <MenuItem onClick={handleProfile}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GoSignIn />
        </IconButton>
        <p>Log in</p>
      </MenuItem>
    ) : (
      <Link style={{ textDecoration: 'none', color: 'black' }} href="/profile">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              sx={{ cursor: 'pointer', height: '27px', width: '27px' }}
              alt={user?.name}
              src={user?.avatar ? user.avatar : '/images/default/user.jpeg'}
            />
          </IconButton>

          <p>Profile</p>
        </MenuItem>
      </Link>
    )}
  </Menu>
);
