import Checkout from '../../components/checkout/Checkout';
import withAuth from '../../components/Common/PrivateRoute/WithAuth';

function Index() {
    return <Checkout />;
}

export default withAuth(Index);
