import Layout from '../../components/Layout/Layout';
import ProfileLayout from '../../components/Profile/ProfileLayout';

export default function index() {
    return (
        <Layout>
            <ProfileLayout>
                <h1>Profile</h1>
            </ProfileLayout>
        </Layout>
    );
}
