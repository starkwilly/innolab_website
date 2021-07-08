import * as authService from "../../_services/authService";
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
} from './actionTypes';



export function tokensuccesss(token) {
    
    return (dispatch) => {
dispatch({ type: GET_TOKEN_SUCCESS, token, isFetchingToken: false })
    }
}

export function getTokenAndTryAuthenticate() {
    return (dispatch) => {
        dispatch({ type: AUTH_FLOW_REQUEST, isFetching: true });

        return dispatch(getToken()).then(() => {
            dispatch({ type: AUTH_FLOW_SUCCESS, isFetching: false });
            return dispatch(tryAuthenticate()).then(() => {
                dispatch({ type: AUTH_FLOW_SUCCESS, isFetching: false });
            }, (error) => {
                dispatch({ type: AUTH_FLOW_FAILURE, error, isFetching: false });
                throw error;
            })
        }, (error) => {
            dispatch({ type: AUTH_FLOW_FAILURE, error, isFetching: false });
            throw error;
        })
    }
}

export function getToken() {
    return dispatch => {
        // Reducers may handle this to set a flag like isFetching
        dispatch({ type: GET_TOKEN_REQUEST, isFetchingToken: true })
        // Perform the API call
        return authService.getToken().then(
            response => {
                // Reducers may handle this to show the data and reset isFetching
                dispatch({ type: GET_TOKEN_SUCCESS, token: response.data.access_token, isFetchingToken: false })
            },
            error => {
                // Reducers may handle this to reset isFetching
                dispatch({ type: GET_TOKEN_FAILURE, error, isFetchingToken: false })
                // Rethrow so returned Promise is rejected
                throw error;
            }
        )
    }
}

export function tryAuthenticate() {
    return dispatch => {
        dispatch({ type: AUTHENTICATE_REQUEST, isFetchingAuth: true });
        return authService.authenticate().then(
            response => {
                dispatch({ type: AUTHENTICATE_SUCCESS, info: response.data, isFetchingAuth: false });
            },
            error => {
                dispatch({ type: AUTHENTICATE_FAILURE, error, isFetchingAuth: false })
                throw error;
            }
        )
    }
}

export const setUserInfo = info => dispatch => {
    dispatch({ type: AUTHENTICATE_SUCCESS, info: info, isFetchingAuth: false });
};