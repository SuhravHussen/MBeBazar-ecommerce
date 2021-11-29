import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function FeaturedSk() {
    return (
        <Stack spacing={1}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" />
        </Stack>
    );
}
