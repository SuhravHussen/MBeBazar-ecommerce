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
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout/Layout';
import Loading from '../components/routeChange/Loading';
import { addToCart } from '../Redux/Slices/cartSlice';
import { addUser } from '../Redux/Slices/userSlice';
import { wrapper } from '../Redux/Store/store';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import '../styles/globals.scss';
import '../styles/overRides.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  React.useEffect(() => {
    // hydrate initial state
    const cartItems = localStorage.getItem('cartItems');
    const user = localStorage.getItem('user');
    if (cartItems) {
      dispatch(addToCart(JSON.parse(cartItems)));
    }
    if (user) {
      dispatch(addUser(JSON.parse(user)));
    }

    const handleRouteChangeStart = () => {
      setState(prevState => ({
        ...prevState,
        isRouteChanging: true,
        // eslint-disable-next-line no-bitwise
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState(prevState => ({
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
    <ToastProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>MBeBAZAR - By Grocery Online </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="description" content="MBeBAZAR - Buy Grocery Items Online" />
          <meta name="theme-color" content="#000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>
        <ThemeProvider theme={theme}>
          <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SessionProvider session={session}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </CacheProvider>
    </ToastProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/require-default-props
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
