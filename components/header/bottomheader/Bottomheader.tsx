import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import dynamic from 'next/dynamic';

const MyToolTip = dynamic(() => import('./MyCategories'));
export default function Bottomheader() {
    return (
        <AppBar
            position="relative"
            sx={{
                height: '90px',
                background: 'transparent',
            }}
            elevation={0}
        >
            <Toolbar
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    display: 'flex',
                }}
            >
                <MyToolTip />
                <Box sx={{ display: 'flex', width: '60%' }}>
                    <h3>Home</h3>
                    <h3>Home</h3>
                    <h3>Home</h3>
                </Box>
                <Box sx={{ width: '20%' }}>Contact</Box>
            </Toolbar>
            <Divider />
        </AppBar>
    );
}
