import { combineReducers } from 'redux';
import app from './app/reducers';

const appReducer = combineReducers({
  // app: (state = {}, action) => state,
  app,
});

export default appReducer;
