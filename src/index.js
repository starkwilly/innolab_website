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


const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store} >
      <App />
    </Provider>
  </MsalProvider>,
  document.getElementById('root')
);