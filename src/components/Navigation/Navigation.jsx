import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavProfile from './NavProfile';

import store from '../../store';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log('nav props', props);
    console.log('store', store.getState());
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__menu">
          <NavProfile />
          <div className="nav__menu-list">
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
              <li>six</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default withRouter(connect(mapStateToProps)(Navigation));
