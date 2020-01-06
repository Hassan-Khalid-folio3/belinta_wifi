import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import { httpMiddleware } from './../middleware/httpMiddleware';

function configureStoreProd(initialState) {
  const middlewares = [
      httpMiddleware
  ];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    httpMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
