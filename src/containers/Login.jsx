import React from 'react';

import LoginForm from './Login/LoginForm';

import preferences from '../helpers/preferences';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // preferences.savePassWord('doggo');
  }

  render() {
    return (
      <div className="login">
        <div className="login__background">
          Login here at some point kek
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
