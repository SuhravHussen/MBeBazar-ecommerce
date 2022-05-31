import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '../../../styles/components/common/invoice/orderedItems.module.scss';

export default function OrderItems() {
    interface Column {
        id: 'productName' | 'quantity' | 'price';
        label: 'SR.' | 'PRODUCT NAME' | 'QUANTITY' | 'ITEM PRICE';
        minWidth?: number;
        align?: 'right' | 'center';
    }

    const columns: Column[] = [
        {
            id: 'productName',
            label: 'PRODUCT NAME',
            minWidth: 100,
            align: 'center',
        },
        {
            id: 'quantity',
            label: 'QUANTITY',
            minWidth: 60,
            align: 'center',
        },
        {
            id: 'price',
            label: 'ITEM PRICE',
            minWidth: 100,
            align: 'center',
        },
    ];

    interface Data {
        productName: string;
        quantity: number;
        price: number;
    }

    const rows: Data[] = [
        {
            productName: 'Rainbow Chard',
            quantity: 4,
            price: 60,
        },
        {
            productName: 'Rainbow Chard',
            quantity: 4,
            price: 60,
        },
        {
            productName: 'Rainbow Chard',
            quantity: 4,
            price: 60,
        },
        {
            productName: 'Rainbow Chard',
            quantity: 4,
            price: 60,
        },
    ];

    return (
        <div className={styles.orders}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#F0F0F0' }}>SR.</TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={{ background: '#F0F0F0' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.price}>
                                <TableCell>{i + 1}</TableCell>
                                {columns.map((column) => {
                                    const value = row[column.id];

                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={styles.total}>
                <div className={styles.column}>
                    <h4>PAYMENT METHOD</h4>
                    <p>COD</p>
                </div>
                <div className={styles.column}>
                    <h4>SHIPPING COST</h4>
                    <p>$80</p>
                </div>
                <div className={styles.column}>
                    <h4>DISCOUNT</h4>
                    <p>$0.00</p>
                </div>
                <div className={styles.column}>
                    <h4>TOTAL AMOUNT</h4>
                    <h5>$80</h5>
                </div>
            </div>
        </div>
    );
}
