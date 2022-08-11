import { TooltipProps } from '@mui/material/Tooltip';
import { styled, Tooltip, tooltipClasses } from './imports';
// bottom nav
// eslint-disable-next-line import/prefer-default-export
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
        color: 'green',
    },
}));
