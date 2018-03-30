import React from 'react';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main role="main" id="main-content" tabIndex="-1">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Template;
