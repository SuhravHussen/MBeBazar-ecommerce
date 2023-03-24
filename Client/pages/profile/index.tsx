/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import withAuth from '../../components/Common/PrivateRoute/WithAuth';
import Dashboard from '../../components/Profile/Dashboard/Dashboard';
import Recentorders from '../../components/Profile/Dashboard/RencentOrders/Recentorders';
import ProfileLayout from '../../components/Profile/ProfileLayout';
import logeOut from '../../utils/handleLogout';
import localStorageManager from '../../utils/localstorageManager';

function index() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { replace } = useRouter();
    const { addToast } = useToasts();

    useEffect(() => {
        const jwt = localStorageManager('jwt-token');
        const refreshToken = localStorageManager('refresh-token');
        const getOrderData = async () => {
            try {
                const response = await fetch(`${process.env.BASE_URL}/users/orders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tokens: {
                            'jwt-token': jwt,
                            'refresh-token': refreshToken,
                        },
                    }),

                    credentials: 'include',
                });
                if (response.status >= 400) {
                    setTimeout(() => {
                        logeOut();
                        replace('/');
                    }, 2000);
                    addToast('Sorry ! your session expired', {
                        appearance: 'success',
                        autoDismiss: true,
                        autoDismissTimeout: 2000,
                    });
                } else {
                    const data = await response.json();
                    if (data.tokenChanged) {
                        localStorageManager('jwt-token', data?.tokens.token);
                        localStorageManager('refresh-token', data?.tokens.refreshToken);
                    }
                    setOrders(data.data);
                    setLoading(false);
                }
            } catch (e) {
                addToast('Something went wrong', {
                    appearance: 'error',
                    autoDismiss: true,
                    autoDismissTimeout: 2000,
                });
                setTimeout(() => {
                    logeOut();
                    replace('/');
                }, 2000);
            }
        };
        getOrderData();
    }, [addToast, replace]);
    return (
        <ProfileLayout>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Dashboard orders={orders} />
                    <Recentorders orders={orders} />
                </>
            )}
        </ProfileLayout>
    );
}

export default withAuth(index);
