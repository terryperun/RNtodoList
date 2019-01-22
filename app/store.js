import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-detools';
import appReducer from './modules';

const store = createStore(
  appReducer,
  // composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
