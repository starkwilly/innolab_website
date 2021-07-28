import baseApi from '../_helpers/baseApi';

export function postIdea(data) {
    return baseApi.post(`${process.env.REACT_APP_API_SB}/form/SaveFormAnswer`, data);
}

export function getDaikiriZip() {
    return baseApi.get(`${process.env.REACT_APP_API_SB}/file/200`);
}

export function getDaikiriMsi() {
    return baseApi.get(`${process.env.REACT_APP_API_SB}/file/201`);
}