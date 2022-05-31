import Layout from '../../components/Layout/Layout';
import Dashboard from '../../components/Profile/Dashboard/Dashboard';
import Recentorders from '../../components/Profile/Dashboard/RencentOrders/Recentorders';
import ProfileLayout from '../../components/Profile/ProfileLayout';

export default function index() {
    return (
        <Layout>
            <ProfileLayout>
                <Dashboard />
                <Recentorders />
            </ProfileLayout>
        </Layout>
    );
}
