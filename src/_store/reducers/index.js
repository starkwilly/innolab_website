import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import articleReducer from './articleReducer';
import notifierReducer from './notifierReducer';

const rootReducer = combineReducers({
  // reducers list
  auth: authenticateReducer,
  notifier: notifierReducer,
  article: articleReducer
});

export default rootReducer;