import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import ProfileLayout from '../../../components/Profile/ProfileLayout';
import UpdateProfile from '../../../components/Profile/Update-profile/UpdateProfile';

function index() {
    return (
        <>
            <ProfileLayout>
                <UpdateProfile />
            </ProfileLayout>
        </>
    );
}

export default withAuth(index);
