import { Paper, Popover, Zoom } from '@mui/material';

interface iProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export default function RenderNotification({ anchorEl, onClose }: iProps) {
    return (
        <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            TransitionComponent={Zoom}
        >
            <Paper>
                <div
                    style={{
                        width: '300px',
                        height: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h3>Feature coming soon </h3>
                </div>
            </Paper>
        </Popover>
    );
}
