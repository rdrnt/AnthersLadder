import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import './sass/main.scss';

import Home from './containers/Home';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
