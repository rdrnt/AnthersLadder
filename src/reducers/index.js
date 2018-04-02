import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import user from './user';
import auth from './auth';

const rootReducer = combineReducers({
  user,
  auth,
});

export default rootReducer;
