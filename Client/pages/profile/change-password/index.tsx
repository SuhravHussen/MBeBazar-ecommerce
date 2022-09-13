import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import Layout from '../../../components/Layout/Layout';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdatePassword from '../../../components/Profile/Update-password/UpdatePassword';

function index() {
  return (
    <Layout>
      <ProfileLayout>
        <UpdatePassword />
      </ProfileLayout>
    </Layout>
  );
}

export default withAuth(index);
