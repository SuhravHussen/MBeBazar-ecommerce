import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { DateTime } from 'luxon';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/components/profile/myorders/myorders.module.scss';

interface Column {
    id: 'ID' | 'ORDERTIME' | 'METHOD' | 'STATUS' | 'TOTAL';
    label: 'ID' | 'ORDER TIME' | 'METHOD' | 'STATUS' | 'TOTAL';
    minWidth?: number;
    align?: 'right' | 'center';
}

const columns: Column[] = [
    { id: 'ID', label: 'ID', minWidth: 130 },
    { id: 'ORDERTIME', label: 'ORDER TIME', minWidth: 120 },
    {
        id: 'METHOD',
        label: 'METHOD',
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'STATUS',
        label: 'STATUS',
        minWidth: 90,
        align: 'center',
    },
    {
        id: 'TOTAL',
        label: 'TOTAL',
        minWidth: 100,
        align: 'right',
    },
];

type statuses = 'Pending' | 'Cancel' | 'Delivered' | 'Processing';

interface Data {
    ID: string;
    ORDERTIME: string;
    STATUS: statuses;
    METHOD: string;
    TOTAL: string;
}

function createData(
    ID: string,
    ORDERTIME: string,
    METHOD: string,
    STATUS: statuses,
    TOTAL: string
): Data {
    return { ID, ORDERTIME, STATUS, METHOD, TOTAL };
}

const rows = [
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Processing', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Delivered', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
    createData('C36E', 'December 30, 2021', 'COD', 'Pending', '204'),
];

export default function MyOrders() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className={styles.MyOrders}>
            <h3>All Orders </h3>
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
                            <TableCell align="center" sx={{ background: '#F0F0F0' }}>
                                ACTION
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                                    {columns.map((column) => {
                                        const value = row[column?.id];
                                        let color;
                                        if (value === 'Pending') color = '#f97316';
                                        else if (value === 'Processing') color = '#6388f1';
                                        else if (value === 'Cancel') color = 'red';
                                        else if (value === 'Delivered') color = 'myColor.main';
                                        return (
                                            <TableCell
                                                sx={{
                                                    color,
                                                }}
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.id === 'ORDERTIME'
                                                    ? DateTime.fromISO(
                                                          '2017-05-15T08:30:00'
                                                      ).toLocaleString(DateTime.DATE_MED)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                    <Link href={`/order/${row.ID}`}>
                                        <TableCell align="center">
                                            <p className={styles.detailsBtn}>Details</p>
                                        </TableCell>
                                    </Link>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}
