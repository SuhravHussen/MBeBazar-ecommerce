import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Link } from '../../../../utils/commonImports';

interface props {
    primaryIcon: any;
    primaryText: string;
    collapses?: Array<{ text: string; icon: any }>;
}

export default function MyList({ primaryIcon, primaryText, collapses = [] }: props) {
    const [foodExpand, setFoodExpand] = React.useState(false);
    return (
        <>
            <ListItemButton onClick={() => setFoodExpand(!foodExpand)}>
                <ListItemIcon>{primaryIcon}</ListItemIcon>
                <ListItemText
                    sx={{
                        color: foodExpand ? 'myColor.main' : null,
                        '& .MuiListItemText-primary': {
                            fontWeight: 600,
                        },
                    }}
                    primary={primaryText}
                />
                {foodExpand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider light variant="middle" />
            {collapses.length > 0 &&
                collapses.map((d) => (
                    <Collapse in={foodExpand} key={d.text} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href={`/products?category=${primaryText}-${d.text}`}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>{d.icon}</ListItemIcon>
                                    <ListItemText primary={d.text} />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                ))}
        </>
    );
}
