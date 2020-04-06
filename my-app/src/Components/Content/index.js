import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowLeft, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';

class Content extends Component {
  render() {
    // ...
    return (
      <div className={this.props.containerStyling}>
        <div className="sub-text r-padding">{this.props.subText}</div>
      	<div className="sub-title r-padding">{this.props.titleText}</div>
        
        <div className="button-section r-padding">
        	<a href="/blog"><button id="button2" className={this.props.focusedButton === 1 ? 'button-text-focused': 'button-text'}>{this.props.buttonText}</button></a>
        </div>

        <div className={this.props.downArrowDisplay === 'true' ? "arrows-container bounce" : "display-none"}>
          <span className="arrows-item"><FontAwesomeIcon className="" icon={faArrowAltCircleDown} /></span>
        </div>
      </div>
    );
  }
}

export default Content;
