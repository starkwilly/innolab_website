import baseApi from '../_helpers/baseApi';

export function postIdea(data) {
    return baseApi.post(`${process.env.REACT_APP_API_SB}/form/SaveFormAnswer`, data);
}

export function getFileById(id, onProgress) {
    return baseApi.get(`${process.env.REACT_APP_API_SB}/file/${id}`, { responseType: 'blob', onDownloadProgress: (onProgress) ? onProgress : null });
}