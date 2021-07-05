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
    return getData.get('https://innolab-stage.accenture.com/innolab-dev/strapiResponses/innolab-globals/');
}

const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        
      });
  }