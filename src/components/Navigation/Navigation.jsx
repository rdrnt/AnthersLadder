import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__menu">
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
    );
  }
}

export default Navigation;
