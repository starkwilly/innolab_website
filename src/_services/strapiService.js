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


export function getGlobalsJson() {

    return baseApi.get('strapiResponses/innolab-globals.json');
    
}

