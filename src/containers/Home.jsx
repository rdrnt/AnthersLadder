import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import userActions from '../actions/user';

class Home extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    dispatch(userActions.fetchProfile());
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

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default withRouter(connect(mapStateToProps)(Home));
