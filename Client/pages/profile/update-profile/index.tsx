import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import Layout from '../../../components/Layout/Layout';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdateProfile from '../../../components/Profile/Update-profile/UpdateProfile';

function index() {
  return (
    <Layout>
      <ProfileLayout>
        <UpdateProfile />
      </ProfileLayout>
    </Layout>
  );
}

export default withAuth(index);
