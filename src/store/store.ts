import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: StoreEnhancer) => undefined;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: {}) {
  const store = createStore(
    rootReducer,
    initialState!,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )
  sagaMiddleware.run(rootSaga);
  return store;
}
