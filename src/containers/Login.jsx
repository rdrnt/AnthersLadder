import React from 'react';

import LoginForm from './Login/LoginForm';

import preferences from '../helpers/preferences';
import userUtils from '../helpers/userUtils';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <div className="login__background">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
