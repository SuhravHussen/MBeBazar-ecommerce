import Modal from '@mui/material/Modal';

type iProps = {
    children: any;
    open: boolean;
    setOpen: any;
};

export default function MyModal({ children, open, setOpen, ...rest }: iProps) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            {...rest}
            sx={{
                display: 'flex',
                p: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </Modal>
    );
}
