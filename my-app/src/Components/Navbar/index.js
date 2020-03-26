import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
  render() {
    // ...
    return (
      <div id="navbar-container">
        <div id="nav-title"> Jerome Ronquillo</div>
        <div className="icons-container">
          <a href="https://github.com/jrmronquillo">
            <FontAwesomeIcon className="iconography" 
            icon={this.props.iconography2} />
          </a>
          <a href="https://www.linkedin.com/in/jerome-ronquillo-4063bb76/">
            <FontAwesomeIcon className="iconography" 
            icon={this.props.iconography1} />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
