import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { ReactNode } from 'react-is/node_modules/@types/react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUser } from '../../Redux/Slices/userSlice';
import styles from '../../styles/components/layout/layout.module.scss';
import Footer from '../Common/Footer/Footer';
import Header from '../header/Heading';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    const dispatch = useDispatch();

    // get the user from the session
    const {
        data,
        status,
    }: {
        data: any;
        status: 'authenticated' | 'loading' | 'unauthenticated';
    } = useSession();
    const user = useSelector(selectUser);
    useEffect(() => {
        if (status === 'authenticated' && !user && data) {
            const jwtToken = data?.tokens.token;

            const refreshToken = data?.tokens.refreshToken;

            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('jwt-token', JSON.stringify(jwtToken));
            localStorage.setItem('refresh-token', JSON.stringify(refreshToken));
            dispatch(addUser(data.user));
        }
    }, [data, dispatch, status, user]);

    return (
        <>
            <Header />
            <main className={styles.layout}>
                {children} <Footer />
            </main>
        </>
    );
}
