import React from 'react';

import authActions from '../actions/auth';

import store from '../store';

import API from '../helpers/API';

class Home extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <p>Home component</p>
      </div>
    );
  }
}

export default Home;
