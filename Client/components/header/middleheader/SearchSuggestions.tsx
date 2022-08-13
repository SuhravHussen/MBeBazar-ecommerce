import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/middleNav/dekstopmiddlenav.module.scss';
import { Image } from '../../../utils/commonImports';

export default function SearchSuggestions({ items }: { items: iProduct[] }) {
    return (
        <div className={styles.suggestionContainer}>
            <List dense>
                {items.map((item: iProduct) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Image
                                    height={80}
                                    width={80}
                                    src={item.images[0]}
                                    alt={item.title}
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
