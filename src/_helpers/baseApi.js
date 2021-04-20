import axios from 'axios';
import store from '../_store/store';

const baseApi = axios.create({
    baseURL: process.env.REACT_APP_API
});

// Intercept request to get the current token if exist
baseApi.interceptors.request.use((config) => {
    // grab current state
    const state = store.getState();
    // get the JWT token out of it
    const authToken = state.auth.token;
    
    config.headers['Cache-Control'] = 'no-cache, no-store';

    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
baseApi.interceptors.response.use((response) => {
    // TODO validate response if not 200 define the flow
    if (response.status === 200) {
        return response;
    }
    else { 
        return Promise.reject(response);
    }
}, (error) => {
    return Promise.reject(error);
});

export default baseApi;