/* eslint-disable react/forbid-prop-types */
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as React from 'react';
// import Loader from '../components/loader/Loader';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import '../styles/globals.scss';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter();

    React.useEffect(() => {
        const handleRouteChange = (url: any, { shallow }: any) => {
            console.log(
                `App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`
            );
        };

        router.events.on('routeChangeStart', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        // <Loader>
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
        // </Loader>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/require-default-props
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
