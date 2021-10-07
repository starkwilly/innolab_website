import { AUTHENTICATE_SUCCESS } from './actionTypes';

export const setUserInfo = info => dispatch => {
    dispatch({ type: AUTHENTICATE_SUCCESS, info: info, isFetchingAuth: false });
};