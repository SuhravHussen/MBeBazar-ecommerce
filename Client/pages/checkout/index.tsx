import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Checkout from '../../components/checkout/Checkout';
import Layout from '../../components/Layout/Layout';
import getLocalStorage from '../../utils/getLocalStorage';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const user = getLocalStorage('user', 'object');
        if (user._id) {
            setLoading(false);
        } else {
            router.replace('/');
        }
    }, [router]);

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <Layout>
            <Checkout />
        </Layout>
    );
}
