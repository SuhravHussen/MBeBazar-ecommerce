import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Order } from '../../../models/order.interface';
import { iProduct } from '../../../models/product.interface';
import styles from '../../../styles/components/common/invoice/orderedItems.module.scss';

export default function OrderItems({ order }: { order: Order<iProduct> }) {
    interface Column {
        id: 'title' | 'quantity' | 'price';
        label: 'SR.' | 'PRODUCT NAME' | 'QUANTITY' | 'ITEM PRICE';
        minWidth?: number;
        align?: 'right' | 'center';
    }

    const [rows, setRows] = useState<
        {
            title: string;
            quantity: number;
            price: number;
        }[]
    >([]);

    const columns: Column[] = [
        {
            id: 'title',
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

    useEffect(() => {
        const rowsData = order?.items?.map((item) => ({
            title: item?.product?.title ? item.product.title : 'N/A',
            quantity: item?.quantity,
            price: item?.price,
        }));
        setRows(rowsData);
    }, [order]);

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
                        {rows &&
                            rows.map((row, i) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={order._id}>
                                    <TableCell>{i + 1}</TableCell>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={styles.total}>
                <div className={styles.column}>
                    <h4>PAYMENT METHOD</h4>
                    <p>{order?.bookingInfo?.paymentMethod}</p>
                </div>
                <div className={styles.column}>
                    <h4>SHIPPING COST</h4>
                    <p>{order?.bookingInfo?.shippingPrice}</p>
                </div>
                <div className={styles.column}>
                    <h4>SHIPPING</h4>
                    <p>
                        {order?.bookingInfo?.shippingMethod
                            ? order?.bookingInfo?.shippingMethod
                            : 'Sundarban'}
                    </p>
                </div>
                <div className={styles.column}>
                    <h4>TOTAL AMOUNT</h4>
                    <h5>{order?.bookingInfo?.totalPrice}</h5>
                </div>
            </div>
        </div>
    );
}
