import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import './sass/main.scss';

import routes from './routes';
import PrivateRoute from './components/PrivateRoute';

import Template from './Template';

import Home from './containers/Home';
import Login from './containers/Login';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Template>
        <Switch>
          <Route path={routes.login} component={Login} />
          <PrivateRoute path={routes.home} component={Home} />
        </Switch>
      </Template>
    </ConnectedRouter>
  </Provider>
);

export default App;
