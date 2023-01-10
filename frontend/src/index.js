import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './Store';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App/>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

