import withAuth from '../../../components/Common/PrivateRoute/WithAuth';
import Invoice from '../../../components/Profile/OrderDetails/Invoice';

function OrderInfo() {
  return (

 
        <Invoice />
     
  );
}

export default withAuth(OrderInfo);
