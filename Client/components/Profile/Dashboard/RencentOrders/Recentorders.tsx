import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Order } from '../../../../models/order.interface';
import styles from '../../../../styles/components/profile/dashboard/recentorders.module.scss';

interface Column {
    id: 'ID' | 'ORDERTIME' | 'METHOD' | 'STATUS' | 'TOTAL';
    label: 'ID' | 'ORDER TIME' | 'METHOD' | 'STATUS' | 'TOTAL';
    minWidth?: number;
    align?: 'right';
}

const columns: Column[] = [
    { id: 'ID', label: 'ID', minWidth: 130 },
    { id: 'ORDERTIME', label: 'ORDER TIME', minWidth: 120 },
    {
        id: 'METHOD',
        label: 'METHOD',
        minWidth: 50,
    },
    {
        id: 'STATUS',
        label: 'STATUS',
        minWidth: 90,
    },
    {
        id: 'TOTAL',
        label: 'TOTAL',
        minWidth: 100,
        align: 'right',
    },
];

type statuses = 'pending' | 'cancelled' | 'delivered' | 'processing';

interface Data {
    ID: string;
    ORDERTIME: string;
    STATUS: statuses;
    METHOD: string;
    TOTAL: number;
}

function createData(
    ID: string,
    ORDERTIME: string,
    METHOD: string,
    STATUS: statuses,
    TOTAL: number
): Data {
    return { ID, ORDERTIME, STATUS, METHOD, TOTAL };
}

export default function Recentorders({ orders }: { orders: Order[] }) {
    const [rows, setRows] = useState<Data[]>([]);
    useEffect(() => {
        const recentOrders = orders.map((order) =>
            createData(
                order._id as string,
                new Date(order.createdAt as string).toLocaleDateString(),
                order.bookingInfo.paymentMethod,
                order.bookingInfo.status,
                order.bookingInfo.totalPrice
            )
        );
        setRows(recentOrders);
    }, [orders]);
    return (
        <div className={styles.recentOrders}>
            <h3>Recent Orders</h3>
            <TableContainer sx={{ maxHeight: 440, minHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
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
                        {rows.map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    let color;
                                    if (value === 'pending') color = '#f97316';
                                    else if (value === 'processing') color = '#6388f1';
                                    else if (value === 'cancel') color = 'red';
                                    else if (value === 'delivered') color = 'myColor.main';
                                    return (
                                        <TableCell
                                            sx={{
                                                color,
                                            }}
                                            key={column.id}
                                            align={column.align}
                                        >
                                            {value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
