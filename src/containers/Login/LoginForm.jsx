import React from 'react';

import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';

const LoginForm = () => (
  <Form
    onSubmit={values => console.log(values)}
    render={({ submitForm, values, addValue, removeValue }) => (
      <form onSubmit={submitForm}>
        <Text field="firstName" placeholder="First Name" />
        <button>Submit</button>
      </form>
    )}
  />
);

export default LoginForm;
