// styles
import GlobalStyles from 'styles/global';
import 'react-grid-layout/css/styles.css';
import './fonts/icomoon/style.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {useLocation} from 'react-router-dom';

// components
import AppLayout from './AppLayout';
import {SnackbarProvider} from 'notistack';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// utils
import {ThemeProvider, StyleSheetManager} from 'styled-components';
import {ThemeProvider as MuiThemeProvider, createTheme} from '@mui/material/styles';
import {preventDefault} from 'utils/helpers';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

// contexts
import {SidebarContextAPI} from 'contexts/sidebarContext';
import { SocketProvider } from "./contexts/SocketContext";

// hooks
import {useEffect} from 'react';
import {useInterfaceContext} from 'contexts/interfaceContext';
import {useDispatch,useSelector} from 'react-redux';
import ScrollProgress from 'UI/ScrollProgress';
import Panel from 'layout/Panel';
import Sidebar from 'layout/Sidebar';
import WidgetsLoader from 'components/WidgetsLoader';
import Login from 'pages/screens/loginscreenn'
// hooks
import usePageIsOverflow from 'hooks/usePageIsOverflow';
import {useRef} from 'react';
// actions
import {saveToLocalStorage} from 'store/features/layout';
import { Suspense} from 'react';
import ForgotPassword from 'pages/screens/forgotpassword';
import Resetpassword1 from 'pages/screens/restpasswordslouma';

const App = () => {
    const location = useLocation();
  //  const isLoginPage = location.pathname === '/authentification';
    const page = document.documentElement;
    const {isDarkMode, isContrastMode, direction} = useInterfaceContext();
    const theme = createTheme({
        direction: direction,
    });
    const cacheRtl = createCache({
        key: 'css-rtl',
        stylisPlugins: [rtlPlugin],
    });
    useDispatch()(saveToLocalStorage());
    useEffect(() => {
        page.setAttribute('dir', direction);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [direction]);

    useEffect(() => {
        isContrastMode && page.classList.add('contrast');
        preventDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const appRef = useRef(null);
    const isOverflow = usePageIsOverflow();
    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);
    const user = useSelector(state => state.auth.user);

    return (<>
        {location.pathname === "/forgotpassword" && <ForgotPassword />}
        {location.pathname.startsWith("/ResetPassword/") && <Resetpassword1 />}
        {location.pathname === "/loginPage" && user ==null && <Login/> }
        {location.pathname === "/" && user ==null && <Login/> }
        {user !=null && 
        <SocketProvider>
        <CacheProvider value ={cacheRtl}>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={{theme: isDarkMode ? 'dark' : 'light'}}>
                    <SnackbarProvider maxSnack={3}
                                      anchorOrigin={{ vertical: 'top',horizontal: direction === 'ltr' ? 'right' : 'left', }}
                                          autoHideDuration={3000}>
                        <SidebarContextAPI>
                            <GlobalStyles/>
                            <StyleSheetManager stylisPlugins={direction === 'rtl' ? [rtlPlugin] : []}>
                            <div className="app" ref={appRef}>
            {                       isOverflow ? <ScrollProgress/> : null}
                                    <Sidebar/>
                                    <div className="app_content">
                                    <Panel/>     <Suspense fallback={<WidgetsLoader />}>
                                    <AppLayout />
                                     </Suspense>                  
                                     </div></div>
                            </StyleSheetManager>
                        </SidebarContextAPI>
                    </SnackbarProvider>
                </ThemeProvider>
            </MuiThemeProvider>
        </CacheProvider>
        </SocketProvider>}
    </>);
}

export default App;
