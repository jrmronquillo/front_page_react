import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowLeft, faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

class Content extends Component {
  render() {
    // ...
    return (
      <div>
      	<div className="sub-title"><a href="/contact">Front End Developer</a></div>
        <div className="arrows-container">
          <span className="arrows-item"><FontAwesomeIcon className="" icon={faArrowAltCircleLeft} /></span>
          <span className="arrows-item"><FontAwesomeIcon className="" icon={faArrowAltCircleRight} /></span>
        </div>
        <div className="button-section">
        	<a href="/blog"><button id="button1" className={this.props.focusedButton === 0 ? 'button-text-focused' : 'button-text' }>LinkedIn</button></a>
        	<a href="/"><button id="button2" className={this.props.focusedButton === 1 ? 'button-text-focused': 'button-text'}>Projects</button></a>
        </div>
      </div>
    );
  }
}

export default Content;
