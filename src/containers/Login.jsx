import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './Login/LoginForm';

import preferences from '../helpers/preferences';
import userUtils from '../helpers/userUtils';

import store from '../store';
import authActions from '../actions/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(
    values,
    { setSubmitting, setErrors /* setValues and other goodies */ }
  ) {
    fetch('https://www.smashladder.com/api/v1/player/me', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${values.accessCode}`,
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        // The account actually exists, so save the password
        if (response.status === 200) {
          // Setting the auth status to true
          store.dispatch(authActions.setAuthStatus(true));
          // going home, since they dont need to login anymore
          this.props.history.push('/');
        } else {
          setErrors({
            accessCode: 'not valid!',
          });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="login">
        <div className="login__background">
          <LoginForm onSubmit={this.formSubmit} />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
