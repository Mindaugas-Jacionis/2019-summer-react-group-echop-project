import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const logger = ({ getState, dispatch }) => next => action => {
  next(action);
  // console.log(action);
};

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
