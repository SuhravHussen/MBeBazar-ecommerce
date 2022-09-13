/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import Layout from '../../components/Layout/Layout';
import Dashboard from '../../components/Profile/Dashboard/Dashboard';
import Recentorders from '../../components/Profile/Dashboard/RencentOrders/Recentorders';
import ProfileLayout from '../../components/Profile/ProfileLayout';
import logeOut from '../../utils/handleLogout';

export default function index() {
  const [orders, setOrders] = useState([]);
  const { replace } = useRouter();
  const { addToast } = useToasts();
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
          const loggedOut = await logeOut();
          if (loggedOut) {
            addToast('Logged Out Successfully', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 });
            replace('/');
          } else {
            addToast('Something went wrong', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 2000 });
          }
        } else {
          const data = await response.json();
          setOrders(data.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getOrderData();
  }, []);
  return (
    <Layout>
      <ProfileLayout>
        <Dashboard orders={orders} />
        <Recentorders orders={orders} />
      </ProfileLayout>
    </Layout>
  );
}
