// import axios from 'axios';
import baseApi from '../_helpers/baseApi';

export function getGlobals() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-globals') : baseApi.get('/static/strapiResponses/globals.json');
}

export function getSectionSingle(id) {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-section-singles/'+id) : baseApi.get('/static/strapiResponses/innolab-section-singles.json');
}

export function getSectionParents() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-section-parents') : baseApi.get('/static/strapiResponses/innolab-section-parents.json');
}

