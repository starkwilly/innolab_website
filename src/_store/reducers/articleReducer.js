import {
    ARTICLES_SUCCESS
} from '../actions/actionTypes';

import initialState from './initialState';

export default function articlesReducer(state = initialState.article, action) {
    switch (action.type) {
        case ARTICLES_SUCCESS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}