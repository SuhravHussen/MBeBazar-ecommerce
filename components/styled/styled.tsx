import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

// bottom nav
export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        borderRadius: '10px',
        margin: 0,
        padding: 0,
        maxWidth: '1600px',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'grey',
    },
}));

// popular products
export const GreenTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#3bb77e',
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        borderRadius: '5px',
        margin: 0,
        padding: '5px 10px',
        maxWidth: '1600px',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#3bb77e',
    },
}));
