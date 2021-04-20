import baseApi from '../_helpers/baseApi';

export function getArticles() {
    return baseApi.get('/articles/');
}

export function getArticle(articleID) {
    return baseApi.get(`/api/articles/${articleID}`);
}

export function saveArticle(data) {
    return baseApi.post('/articles/', data);
}