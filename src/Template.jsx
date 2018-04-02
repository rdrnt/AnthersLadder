import React from 'react';

import Navigation from './components/Navigation/Navigation';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base">
        <Navigation />
        {/*
        <main role="main" id="main-content" tabIndex="-1">
          {this.props.children}
        </main>
        */}
        <div className="hoo">
          <p>hello</p>
        </div>
      </div>
    );
  }
}

export default Template;
