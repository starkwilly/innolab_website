import {
    DISPLAY_NOTIFIER,
    RESET_NOTIFIER,
    CLOSE_NOTIFIER
} from '../actions/actionTypes';

/*
 *
 *  @param {string} message - The message to display in the snackbar - required
 * .@param {string} severity - So far has two types "success" or "error" - required
 *  @param {string} logErr - The logErr to add in the server log - not required
 */
export function notify({ title, message, severity, logErr }) {
    // TODO call API log ???
    if (typeof logErr !== 'undefined' && severity === 'error') {
        console.log(logErr);
    }
    return dispatch => dispatch({ type: DISPLAY_NOTIFIER, title, message, severity });
}

export function close() {
    return dispatch => dispatch({ type: CLOSE_NOTIFIER });
}

export function reset() {
    return dispatch => dispatch({ type: RESET_NOTIFIER });
}