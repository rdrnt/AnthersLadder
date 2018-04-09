import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './components/Navigation/Navigation';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base">
        <Navigation />
        <main role="main" id="main-content" tabIndex="-1">
          {this.props.children}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default withRouter(connect(mapStateToProps)(Template));
