import {
    AUTH_FLOW_REQUEST,
    AUTH_FLOW_SUCCESS,
    AUTH_FLOW_FAILURE,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_REQUEST,
    GET_TOKEN_FAILURE,
    AUTHENTICATE_REQUEST,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAILURE
} from '../actions/actionTypes';

import initialState from './initialState';

export default function authenticateReducer(state = initialState.auth, action) {
    switch (action.type) {
        case GET_TOKEN_REQUEST:
            return { ...state, isFetchingToken: action.isFetchingToken };
        case GET_TOKEN_SUCCESS:
            return { ...state, token: action.token, isFetchingToken: action.isFetchingToken };
        case GET_TOKEN_FAILURE:
            return { ...state, error: action.error, isFetchingToken: action.isFetchingToken };
        case AUTHENTICATE_REQUEST:
            return { ...state, isFetchingAuth: action.isFetchingAuth };
        case AUTHENTICATE_SUCCESS:
            return { ...state, info: action.info, isFetchingAuth: action.isFetchingAuth };
        case AUTHENTICATE_FAILURE:
            return { ...state, error: action.error, isFetchingAuth: action.isFetchingAuth };
        case AUTH_FLOW_REQUEST:
            return { ...state, isFetching: action.isFetching };
        case AUTH_FLOW_SUCCESS:
            return { ...state, isFetching: action.isFetching };
        case AUTH_FLOW_FAILURE:
            return { ...state, error: action.error, isFetching: action.isFetching };
        default:
            return state;
    }
} 