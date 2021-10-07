import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import notifierReducer from './notifierReducer';

const rootReducer = combineReducers({
  // reducers list
  auth: authenticateReducer,
  notifier: notifierReducer,
});

export default rootReducer;