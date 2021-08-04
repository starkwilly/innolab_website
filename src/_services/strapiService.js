// import axios from 'axios';
import baseApi from '../_helpers/baseApi';

export function getGlobals() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-globals') : baseApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/globals.json');
}

export function getSectionSingle(id) {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-section-singles/'+id) : baseApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-section-singles_2.json');
}

export function getSectionParents() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? baseApi.get('/innolab-section-parents') : baseApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-section-parents.json');
}

