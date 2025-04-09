import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Preloader from './Shared/Preloader/Preloader';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const helmetContext = {}; // Define helmetContext here
import 'leaflet/dist/leaflet.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   
    <GoogleOAuthProvider clientId="690180385102-hf8kel1erdg9m6juc2dosvjrtstobh6e.apps.googleusercontent.com"> 
      <React.StrictMode>     <HelmetProvider context={helmetContext}> 
          <Preloader />
          <RouterProvider router={router} />
        </HelmetProvider> </React.StrictMode>
        </GoogleOAuthProvider>

    </PersistGate>
  </Provider>
);
