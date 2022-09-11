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
            <h1>Sorry, Something is wrong!! </h1>

            <Image src="/images/illustrates/error.jpg" alt="success" width={200} height={200} />
        </Layout>
    );
}
