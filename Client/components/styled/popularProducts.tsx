import { TooltipProps } from '@mui/material/Tooltip';
import { styled, Tooltip, tooltipClasses } from './imports';
// popular products
// eslint-disable-next-line import/prefer-default-export
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
