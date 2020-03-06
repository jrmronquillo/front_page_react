import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Components/Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGit, faHtml5, faJs, faCss3, faPython, faUbuntu } from '@fortawesome/free-brands-svg-icons'
import { faCog, faArrowLeft, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Jerome Ronquillo',
      ctas: ['http://linkedin.com','/blog'],
      focusedButton: 0,
    };

    this.handleKeydown = this.handleKeydown.bind(this);
    this.selectCall = this.selectCall.bind(this);
  }

  handleKeydown(event){
    // console.log(event);
    switch(event.keyCode){
      case 37:
        // left arrow
        this.setState({
          focusedButton: 0,
        });
        break;
      case 39:
        // right arrow
        this.setState({
          focusedButton: 1,
        });
        break;
      case 13:
        // enter
        console.log('enter submitted');
        this.selectCall();
        break;
      default:
        console.log('unsupported keydown: '+event.keyCode);
    }




  }

  selectCall(){
    console.log(this.state.ctas[this.state.focusedButton]);
    var url = this.state.ctas[this.state.focusedButton] 
    window.location.href=url;
    
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeydown)
  }



  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
           <code>{this.state.name}</code> 
        </p>

         <Content focusedButton={this.state.focusedButton}  />
        <div>
          <FontAwesomeIcon className="App-logo" icon={faCog} />
          <FontAwesomeIcon className="App-logo" icon={faReact} />
          <FontAwesomeIcon className="App-logo" icon={faGit} />
          <FontAwesomeIcon className="App-logo" icon={faHtml5} />
          <FontAwesomeIcon className="App-logo" icon={faJs} />
          <FontAwesomeIcon className="App-logo" icon={faCss3} />
          <FontAwesomeIcon className="App-logo" icon={faPython} />
          <FontAwesomeIcon className="App-logo" icon={faUbuntu} />
          
          <FontAwesomeIcon className="App-logo" icon={faArrowAltCircleLeft} />
        </div>
        
        
       

      </header>
    </div>
    );
  }
  
}

export default App;
