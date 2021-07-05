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


let jsonData = 0;
export function getGlobalsJson() {
    return jsonData.get('/innolab-globals');
}