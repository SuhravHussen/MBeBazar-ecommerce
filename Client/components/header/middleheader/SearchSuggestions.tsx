import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/middleNav/dekstopmiddlenav.module.scss';
import { Image, Link, useEffect, useRef } from '../../../utils/commonImports';
import { useOutsideAlerter } from '../../../utils/customHooks';

export default function SearchSuggestions({
    items,
    setItems,
}: {
    items: iProduct[];
    setItems: React.Dispatch<React.SetStateAction<iProduct[]>>;
}) {
    const wrapperRef = useRef(null);
    const isOutSide = useOutsideAlerter(wrapperRef);
    useEffect(() => {
        if (isOutSide) {
            setItems([]);
        }
    }, [isOutSide, setItems]);
    return (
        <div ref={wrapperRef} className={styles.suggestionContainer}>
            <List>
                {items.map((item: iProduct) => (
                    <ListItem
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
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
                        <Link href={`/product-details/${item._id}`}>
                            <ListItemText primary={item.title} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
