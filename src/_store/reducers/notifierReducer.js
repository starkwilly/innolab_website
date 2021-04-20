import {
    DISPLAY_NOTIFIER,
    RESET_NOTIFIER,
    CLOSE_NOTIFIER
} from '../actions/actionTypes';

import initialState from './initialState';

export default function notifierReducer(state = initialState.notifier, action) {
    switch (action.type) {
        case DISPLAY_NOTIFIER:
            return { ...state, open: true, title: action.title, message: action.message, severity: action.severity };
        case RESET_NOTIFIER:
            return { ...state, open: false, message: '', severity: '' };
        case CLOSE_NOTIFIER:
            return { ...state, open: false };
        default:
            return state;
    }
} 