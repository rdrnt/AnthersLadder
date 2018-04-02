import React from 'react';

import { Formik } from 'formik';

import store, { history } from '../../store';
import authActions from '../../actions/auth';

const LoginForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{
        accessCode: '',
      }}
      /*
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};
        if (values.accessCode.length < 0) {
          errors.accessCode = 'Not a good lenth!';
        } else {
          errors.accessCode = 'Test?';
        }
        return errors;
      }}
      */
      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
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
              console.log('two chainz');
              store.dispatch(authActions.setAuthStatus(true));
            } else {
              setErrors({
                accessCode: 'not valid!',
              });
            }
          })
          .catch(error => console.log(error));
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="login__form">
          <input
            type="accessCode"
            name="accessCode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.accessCode}
          />
          {touched.accessCode &&
            errors.accessCode && <p className="error">{errors.accessCode}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export default LoginForm;
