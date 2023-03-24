import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getLocalStorage from '../../../utils/getLocalStorage';
import Loading from '../Loading/Loading';

const withAuth = (Component: any) => {
    const Auth = (props: any) => {
        const [loading, setLoading] = useState(true);

        const { replace } = useRouter();
        // Login data added to props via redux-store (or use react context for example)
        useEffect(() => {
            const user = getLocalStorage('user', 'object');
            if (!user) {
                replace('/');
            } else {
                setLoading(false);
            }
        }, [replace]);

        if (loading) {
            return <Loading type="cylon" color="green" />;
        }
        // If user is logged in, return original component
        return <Component {...props} />;
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    if (Component.getServerSideProps) {
        Auth.getServerSideProps = Component.getServerSideProps;
    }
    if (Component.getStaticProps) {
        Auth.getStaticProps = Component.getStaticProps;
    }

    return Auth;
};

export default withAuth;
