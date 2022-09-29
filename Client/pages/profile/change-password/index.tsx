import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdatePassword from '../../../components/Profile/Update-password/UpdatePassword';

function index() {
  return (

      <ProfileLayout>
        <UpdatePassword />
      </ProfileLayout>

  );
}

export default withAuth(index);
