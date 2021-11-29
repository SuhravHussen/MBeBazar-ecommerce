import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function PopularSk() {
    return (
        <Stack
            sx={{
                marginRight: '10px',
            }}
            spacing={1}
        >
            <Skeleton variant="circular" width={110} height={120} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </Stack>
    );
}
