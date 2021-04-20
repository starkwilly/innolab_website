// import baseApi from '../_helpers/baseApi';

// TODO: call the correct API service to update the gdpr value if needed
export function acceptGdpr() {
    localStorage.setItem('gdprDate', true);
}