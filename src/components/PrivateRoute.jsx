import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes from '../routes';
// TODO: Actually add auth lul
const fakeAuth = {
  isAuthenticated: false,
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
