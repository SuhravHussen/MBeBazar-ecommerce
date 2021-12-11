import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Image } from '../../../../utils/commonImports';

export default function BlogList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Image
                        src="https://res.cloudinary.com/doircnueq/image/upload/v1636430506/MBeCommerece/Blogs/blog-1_slv9av.png"
                        height={50}
                        width={50}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <p
                            style={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                width: '250px',
                            }}
                        >
                            The Intermediate Guide to Healthy Food
                        </p>
                    }
                    secondary="Jan 9, 2014"
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Image
                        src="https://res.cloudinary.com/doircnueq/image/upload/v1636430506/MBeCommerece/Blogs/blog-1_slv9av.png"
                        height={50}
                        width={50}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <p
                            style={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                width: '250px',
                            }}
                        >
                            The Intermediate Guide to Healthy Food
                        </p>
                    }
                    secondary="Jan 9, 2014"
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Image
                        src="https://res.cloudinary.com/doircnueq/image/upload/v1636430506/MBeCommerece/Blogs/blog-1_slv9av.png"
                        height={50}
                        width={50}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <p
                            style={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                width: '250px',
                            }}
                        >
                            The Intermediate Guide to Healthy Food
                        </p>
                    }
                    secondary="Jan 9, 2014"
                />
            </ListItem>
        </List>
    );
}
