import axios from 'axios';
import baseApi from '../_helpers/baseApi';

const environment = process.env.REACT_APP_ENV;

export function getToken() {
    const baseURL = `${process.env.REACT_APP_AUTH_API}/auth/token`;

    if (environment === 'local') {
        const user = localStorage.getItem('selectedUser');
        const userName = user.split('.');
        const firstName = (userName[0]).charAt(0).toUpperCase() + (userName[0]).slice(1);
        const lastName = (userName[1]).charAt(0).toUpperCase() + (userName[1]).slice(1);
        const claims = `app=6&user=${user}&emailaddress=${user}@accenture.com&firstname=${firstName}&lastname=${lastName}`;

        return axios.get(baseURL, { headers: { "claims": claims } });
    }

    return axios.get(baseURL);
}

export function authenticate() {
    return baseApi.post('/api/authenticate', {});
}