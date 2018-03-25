import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

const defaultState = {
  user: {},
};

export const history = createBrowserHistory();

const middleware = applyMiddleware(routerMiddleware(history), thunkMiddleware);

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(middleware)
);

export default store;
