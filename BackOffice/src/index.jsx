import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store,persistor} from 'store/store'
import {BrowserRouter} from 'react-router-dom';
import {InterfaceContextAPI} from 'contexts/interfaceContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

// fonts
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'fonts/icomoon/icomoon.woff'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Assure-toi que redux-persist est utilisé si nécessaire */}
    <GoogleOAuthProvider clientId="690180385102-hf8kel1erdg9m6juc2dosvjrtstobh6e.apps.googleusercontent.com">  <BrowserRouter>
        <InterfaceContextAPI>
          <App />
        </InterfaceContextAPI>
      </BrowserRouter> </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
);