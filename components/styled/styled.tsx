import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
// drawer
export const DrawerInfoBox = styled(Box)(
    ({ theme }: any) =>
        `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-color: ${theme.palette.myColor.grey};
    height: 160px;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
  
`
);

export const MyListItemButton = styled(ListItemButton)(
    () =>
        `
   margin:0px;
   padding:5px
  
`
);

export const MyListItemIcon = styled(ListItemIcon)(
    ({ theme }: any) =>
        `
color:${theme.palette.myColor.main}
  
`
);
export const MyListItemText = styled(ListItemText)(
    ({ theme }: any) =>
        `
color:${theme.palette.myColor.grey};
margin-left:-15px'
  
`
);
