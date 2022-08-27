/* eslint-disable react/forbid-prop-types */
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ToastProvider } from 'react-toast-notifications';
// eslint-disable-next-line import/no-absolute-path
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/no-absolute-path
import 'slick-carousel/slick/slick.css';
// import Loader from '../components/loader/Loader';
import { SessionProvider } from 'next-auth/react';
import Loading from '../components/routeChange/Loading';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import '../styles/globals.scss';
import '../styles/overRides.scss';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps: { session, ...pageProps },
    } = props;

    const router = useRouter();
    const [state, setState] = React.useState({
        isRouteChanging: false,
        loadingKey: 0,
    });

    React.useEffect(() => {
        const handleRouteChangeStart = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: true,
                // eslint-disable-next-line no-bitwise
                loadingKey: prevState.loadingKey ^ 1,
            }));
        };

        const handleRouteChangeEnd = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: false,
            }));
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeEnd);
        router.events.on('routeChangeError', handleRouteChangeEnd);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeEnd);
            router.events.off('routeChangeError', handleRouteChangeEnd);
        };
    }, [router.events]);

    return (
        // <Loader>

        <ToastProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>My page</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <SessionProvider session={session}>
                        <Component {...pageProps} />
                    </SessionProvider>
                </ThemeProvider>
            </CacheProvider>
        </ToastProvider>
        // </Loader>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/require-default-props
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
