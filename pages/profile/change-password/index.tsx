import Layout from '../../../components/Layout/Layout';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdatePassword from '../../../components/Profile/Update-password/UpdatePassword';

export default function index() {
    return (
        <Layout>
            <ProfileLayout>
                <UpdatePassword />
            </ProfileLayout>
        </Layout>
    );
}
