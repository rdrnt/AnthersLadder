import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';
import routes from '../routes';

// TODO: Actually add auth lul
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = store.getState().auth;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
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
};

export default PrivateRoute;
