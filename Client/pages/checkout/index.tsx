import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Checkout from '../../components/checkout/Checkout';
import withAuth from '../../components/Common/PrivateRoute/WithAuth';
import Layout from '../../components/Layout/Layout';

function Index() {
  return (
    <Layout>
      <Checkout />
    </Layout>
  );
}

export default withAuth(Index);
