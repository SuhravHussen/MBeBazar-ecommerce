/* eslint-disable react/no-array-index-key */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { FaClipboardList } from 'react-icons/fa';
import { FiSettings, FiUnlock } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import styles from '../../styles/components/profile/profileLayout.module.scss';
import { Link, React } from '../../utils/commonImports';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    const { route } = useRouter();
    type menuType = {
        text: string;
        icon: any;
        link: string;
    };
    const menuItems: Array<menuType> = [
        {
            text: 'Dashboard',
            icon: <MdOutlineDashboardCustomize />,
            link: '/profile',
        },
        {
            text: 'My Orders',
            icon: <FaClipboardList />,
            link: '/profile/my-orders',
        },

        {
            text: 'Update Profile',
            icon: <FiSettings />,
            link: '/profile/update-profile',
        },
        {
            text: 'Change Password',
            icon: <FiUnlock />,
            link: '/profile/change-password',
        },
    ];

    return (
        <div className={styles.profileLayoutContainer}>
            <div className={styles.header}>
                <List dense>
                    {menuItems.map((m, i) => (
                        <Link href={m.link} key={i}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        color: route === m.link ? 'myColor.main' : 'black',
                                        '&:hover, &:focus': {
                                            color: 'myColor.main',
                                        },
                                        marginBottom: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            color: route === m.link ? 'myColor.main' : '',
                                            '&:hover': {
                                                color: 'myColor.main',
                                            },
                                        }}
                                    >
                                        {m.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        sx={{
                                            fontSize: '15px',
                                            fontWeight: '800',
                                        }}
                                    >
                                        {m.text}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                '&:hover, &:focus': {
                                    color: 'myColor.main',
                                },
                                marginBottom: '5px',
                                fontSize: '20px',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    '&:hover': {
                                        color: 'myColor.main',
                                    },
                                }}
                            >
                                <IoMdExit />
                            </ListItemIcon>
                            <ListItemText
                                disableTypography
                                sx={{
                                    fontSize: '15px',
                                    fontWeight: '800',
                                }}
                            >
                                Logout
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    );
}
