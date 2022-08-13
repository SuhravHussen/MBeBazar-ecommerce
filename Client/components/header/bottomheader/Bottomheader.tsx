import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { BsHeadset } from 'react-icons/bs';
import Announce from '../topheader/Announce';
import CategoriesToolTip from './AllCategories/CategoriesToolTip';
import MegaMenu from './MegaMenu/MegaMenu';

export default function Bottomheader() {
    return (
        <>
            <AppBar
                position="relative"
                sx={{
                    height: '70px',
                    background: 'transparent',
                    maxWidth: '1600px',
                    margin: '0 auto',
                    display: { xs: 'none', md: 'block' },
                    zIndex: -1,
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
                    <CategoriesToolTip />
                    <Box
                        sx={{
                            display: 'flex',
                            width: '60%',
                            color: 'black',
                            justifyContent: 'space-around',
                        }}
                    >
                        <MegaMenu />
                        <div
                            style={{
                                width: '70%',
                            }}
                        >
                            <Announce />
                        </div>
                    </Box>
                    <Box
                        sx={{
                            width: '20%',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',

                            height: '100%',
                        }}
                    >
                        <BsHeadset size={30} />
                        <Box
                            sx={{
                                height: '100%',
                            }}
                        >
                            <h2
                                style={{
                                    padding: 0,
                                    margin: 0,
                                    color: '#3bb77e',
                                }}
                            >
                                1900 - 888
                            </h2>
                            <p
                                style={{
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    textAlign: 'center',
                                    color: 'grey',
                                }}
                            >
                                24/7 support
                            </p>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider />
        </>
    );
}
