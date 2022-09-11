import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);
    return (
        <Layout>
            <h1>Thanks for your order </h1>

            <Image src="/images/illustrates/success.jpg" alt="success" width={200} height={200} />
        </Layout>
    );
}
