import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

export default function ResponsiveDialog({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    const [loginScreen, setLoginScreen] = useState(true);

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
                style: {
                    borderRadius: '15px',
                },
            }}
        >
            <button
                onClick={handleClose}
                type="button"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '25px',
                    color: 'grey',
                    cursor: 'pointer',
                }}
            >
                <AiOutlineCloseCircle />
            </button>
            {loginScreen ? (
                <Login handleModalClose={handleClose} handleScreen={setLoginScreen} />
            ) : (
                <SignUp handleScreen={setLoginScreen} />
            )}
        </Dialog>
    );
}
