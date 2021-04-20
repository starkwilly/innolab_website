import {
    ARTICLES_SUCCESS,
} from './actionTypes';

export const setArticles = data => dispatch => {
    dispatch({ type: ARTICLES_SUCCESS, payload: data });
};