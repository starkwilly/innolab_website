import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './_theme/custom.scss';
import 'react-app-polyfill/stable';
import App from './App';
import store from './_store/store';
import "animate.css/animate.compat.css"; // https://animate.style/#migration
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./_helpers/authConfig";


export const msalInstance = new PublicClientApplication(msalConfig);

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-9KD05RV68C');
};

ReactDOM.render(

  
  <MsalProvider instance={msalInstance}>
     <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-9KD05RV68C"
    />
    <script>{injectGA()}</script>
    <Provider store={store} >
      <App />
    </Provider>
  </MsalProvider>,
  document.getElementById('root'),
  
  
);