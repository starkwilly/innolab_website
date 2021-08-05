const axios = require('axios');
const fs = require("fs");

const apiBase = process.env.REACT_APP_API;
const savePath = './public/static/strapiResponses';
const reqArr = [
    {req: '/innolab-globals', file: '/innolab-globals.json'},
    {req: '/innolab-hero', file: '/innolab-hero.json'},
    {req: '/innolab-section-singles/2', file: '/innolab-section-singles_2.json'},
    {req: '/innolab-section-parents', file: '/innolab-section-parents.json'},
]


const saveToFile = (path, resp) => {
    if (path && resp.data) {
        console.log('Saving file to ', path);
        fs.writeFile(path, JSON.stringify(resp.data, null, 4), (err) => {
            if (err) console.log('saveToFile > Error writing file:', err);
        })
    }
}
reqArr.forEach(val => {
    console.log('Getting JSON data from: ', `${apiBase}${val.req}`);
    axios.get(`${apiBase}${val.req}`)
    .then(response => {
        saveToFile(`${savePath}${val.file}`, response)
    })
    .catch(error => {
        console.log(error);
    });
});
console.log('Saving JSON data COMPLETE on ', savePath);
console.log('** PLEASE MANUALLY REMOVE ANY ABSOLUTE IMAGE PATH ON THOSE JSON FILES **', savePath);

