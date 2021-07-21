import baseApi from '../_helpers/baseApi';

export function getGlobals() {
    return baseApi.get('/innolab-globals');
}

export function getSectionSingle(id) {
    return baseApi.get('/innolab-section-singles/'+id);
}

export function getSectionParents() {
    return baseApi.get('/innolab-section-parents');
}

export function uploadIdeasForm(data) {
    return baseApi.post('/servicebus-dev/api/v1/form/SaveFormAnswer', data);
}

export function getGlobalsJson() {
let _data
    fetch('https://innolab-stage.accenture.com/innolab-dev/static/strapiResponses/globals.json')
    .then(response => response.json() )
    .then(data => console.log("fetch response" + JSON.stringify(data),_data = data));
    return _data
}




