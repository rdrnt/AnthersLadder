import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import './sass/main.scss';

import routes from './routes';
import PrivateRoute from './components/PrivateRoute';

import Home from './containers/Home';
import Login from './containers/Login';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path={routes.login} component={Login} />
          <PrivateRoute path={routes.home} component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
