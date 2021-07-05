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
    fetch('https://innolab-stage.accenture.com/innolab-dev-api/strapiResponses/globals.json')
  .then(response => response.json())
  .then(data => console.log("fetch response" + data));

    return baseApi.get('strapiResponses/globals.json');
    
}




