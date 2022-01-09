import Invoice from '../../components/Common/OrderDetails/Invoice';
import OrderItems from '../../components/Common/OrderDetails/OrderItems';
import Layout from '../../components/Layout/Layout';

export default function Order() {
    return (
        <Layout>
            <Invoice />
            <OrderItems />
        </Layout>
    );
}
