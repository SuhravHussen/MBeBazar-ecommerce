import Layout from '../../../components/Layout/Layout';
import MyOrders from '../../../components/Profile/MyOrders/MyOrders';
import ProfileLayout from '../../../components/Profile/ProfileLayout';

export default function index() {
    return (
        <Layout>
            <ProfileLayout>
                <MyOrders />
            </ProfileLayout>
        </Layout>
    );
}
