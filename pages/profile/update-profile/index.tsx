import Layout from '../../../components/Layout/Layout';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdateProfile from '../../../components/Profile/Update-profile/UpdateProfile';

export default function index() {
    return (
        <Layout>
            <ProfileLayout>
                <UpdateProfile />
            </ProfileLayout>
        </Layout>
    );
}
