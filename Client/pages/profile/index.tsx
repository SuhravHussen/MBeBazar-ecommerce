/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Dashboard from '../../components/Profile/Dashboard/Dashboard';
import Recentorders from '../../components/Profile/Dashboard/RencentOrders/Recentorders';
import ProfileLayout from '../../components/Profile/ProfileLayout';

export default function index() {
    const [orders, setOrders] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const getOrderData = async () => {
            try {
                const response = await fetch(`${process.env.BASE_URL}/users/orders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                if (response.status === 401) {
                    router.replace('/');
                }
                const data = await response.json();
                setOrders(data.data);
            } catch (e) {
                console.log(e);
            }
        };
        getOrderData();
    }, [router]);
    return (
        <Layout>
            <ProfileLayout>
                <Dashboard orders={orders} />
                <Recentorders orders={orders} />
            </ProfileLayout>
        </Layout>
    );
}
