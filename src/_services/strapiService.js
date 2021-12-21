import axios from 'axios';
import baseApi from '../_helpers/baseApi';

const useApi = (process.env.REACT_APP_API_ENABLED !== 'FALSE' && process.env.REACT_APP_API_USE_TOKEN === 'FALSE')
                ? axios.create({baseURL: process.env.REACT_APP_API})
                : baseApi;

export function getGlobals() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? useApi.get('/innolab-globals') : useApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-globals.json');
}

export function getHero() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? useApi.get('/innolab-hero') : useApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-hero.json');
}

export function getSectionSingle(id) {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? useApi.get('/innolab-section-singles/'+id) : useApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-section-singles_2.json');
}

export function getSectionParents() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? useApi.get('/innolab-section-parents') : useApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/innolab-section-parents.json');
}


export function getSynopsSectionParent() {
    return (process.env.REACT_APP_API_ENABLED !== 'FALSE') ? useApi.get('/synops-section-parents') : useApi.get(process.env.PUBLIC_URL+'/static/strapiResponses/synops-section-parents.json');
}
