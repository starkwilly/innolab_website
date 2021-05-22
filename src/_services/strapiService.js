import baseApi from '../_helpers/baseApi';

export function getSections() {
    return baseApi.get('/innolab-section-basics');
}