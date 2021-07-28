import axios from 'axios';
// import store from '../_store/store';
import { msalInstance } from "../index";
import { loginRequest } from "./authConfig";

const baseApi = axios.create({
    baseURL: (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? process.env.REACT_APP_API : '/'
});

// Intercept request to get the current token if exist
baseApi.interceptors.request.use(setHeadersFn, (error) => {
    return Promise.reject(error);
});

async function setHeadersFn(config) {
    // window.log('baseApi setHeadersFn ', config);
    config.headers['Cache-Control'] = 'no-cache, no-store';

    const account = msalInstance.getActiveAccount();
    const resToken = await msalInstance.acquireTokenSilent({...loginRequest, account: account})
        .then((response) => {
            // window.log('baseApi acquireTokenSilent SUCCESS ', response);
            return response.accessToken;
        }).catch(function (error) {
            //Acquire token silent failure
            window.log("baseApi acquireTokenSilent FAIL:", error);
            // const message = 'Auth token failed';
            // store.dispatch(notify({ message, severity: 'error' }));
            return null;
        });

    if (resToken) {
        config.headers.Authorization = `Bearer ${resToken}`;
    }
    return config;
}

// Add a response interceptor
baseApi.interceptors.response.use((response) => {
    // act on any 2xx status code
    // window.log("baseApi RESPONSE Any 2xx status:", response);
    // second compare argument is for downloads
    if (response.data.statusCode === 200 || response.data.type === 'application/zip' || process.env.REACT_APP_API_ENABLED === 'FALSE' && response.status === 200) {
        //window.log("baseApi SUCCEED statusCode 200:");
        return response;
    } else {
        window.log("baseApi REJECTED statusCode non 200:");
        // const message = response.data.statusDescription;
        // store.dispatch(notify({ message, severity: 'error' }));
        return Promise.reject(response);
    }

}, (error) => {
    window.log("baseApi FAILED Any non 2xx status:", error);
    // const message = `Api communication fail: ${error.response.status}`;
    // store.dispatch(notify({ message, severity: 'error' }));
    return Promise.reject(error);
    /* return new Promise((resolve, reject) => {
        const originalReq = error.config;
        if ( error.response.status === 401 && error.config && !error.config._isRetry ){
            window.log("baseApi RETRY:", error);
            originalReq._isRetry = true;
            resolve(store.dispatch(getToken().then(() => { return axios(originalReq); })));
        }
        const message = "";
        store.dispatch(notify({ message, severity: 'error' }));
        return Promise.reject(error);
    }); */
});

export default baseApi;


