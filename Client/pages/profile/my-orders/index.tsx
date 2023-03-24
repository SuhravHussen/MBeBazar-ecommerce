/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import MyOrders from '../../../components/Profile/MyOrders/MyOrders';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import localStorageManager from '../../../utils/localstorageManager';

function index() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const jwt = localStorageManager('jwt-token');
        const refreshToken = localStorageManager('refresh-token');

        const tokens = {
            'jwt-token': jwt,
            'refresh-token': refreshToken,
        };

        const getOrderData = async () => {
            try {
                const response = await fetch(`${process.env.BASE_URL}/users/orders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tokens,
                    }),
                    credentials: 'include',
                });
                const data = await response.json();
                if (data.tokenChanged) {
                    localStorageManager('jwt-token', data?.tokens.token);
                    localStorageManager('refresh-token', data?.tokens.refreshToken);
                }
                setOrders(data.data);
            } catch (e) {
                // eslint-disable-next-line no-alert
                alert('Something went wrong');
            }
        };
        getOrderData();
    }, []);
    return (
        <ProfileLayout>
            <MyOrders orders={orders} />
        </ProfileLayout>
    );
}

export default withAuth(index);
