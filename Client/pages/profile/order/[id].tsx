import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import Layout from '../../../components/Layout/Layout';
import Invoice from '../../../components/Profile/OrderDetails/Invoice';

function OrderInfo() {
  return (
    <Layout>
      <>
        <Invoice />
      </>
    </Layout>
  );
}

export default withAuth(OrderInfo);
