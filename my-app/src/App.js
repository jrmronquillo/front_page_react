import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sprite.css';
import Content from './Components/Content'
import Navbar from './Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGit, faHtml5, faJs, faCss3, faPython, faUbuntu, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCog, faArrowLeft, faArrowAltCircleLeft, faEnvelope} from '@fortawesome/free-solid-svg-icons'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Front End Developer',
      subText1: "Hi, I am a ",
      ctas: ['http://linkedin.com','/blog'],
      focusedButton: 0,
      bg: true,
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
        <Navbar iconography1={faLinkedin} iconography2={faGit} />
      </header>
      <main>
       <div className="sprite-container"> 
        <Content containerStyling='portfolio-1 sprite text-left'
         focusedButton={this.state.focusedButton} 
         titleText={this.state.title} 
         subText={this.state.subText1} buttonText='View Projects' downArrowDisplay='true' />
       </div> 
       <div className="sprite-container">
        <Content containerStyling='portfolio-1 sprite sprite2 text-right'
         titleText='Work' subText='View the way I' buttonText='View Github' downArrowDisplay='false'/>
       </div>


      </main>
      <footer>
        <div id='footer-container'>
          <div id="About" className="footer-section">
            <div className="footer-title"> About </div>
            <div className="footer-text">
             Jerome Ronquillo is a Front End Developer based in Los Angeles, CA.
             His specialty is React.
            </div>

          </div>
          <div id="Skills " className="footer-section">
            <div className="footer-title"> Photography </div>
            <div className="footer-text">
              When I'm away from a keyboard, I enjoy doing a bit a photography. 
            </div>
          </div>
          <div id="Contact" className="footer-section">
            <div className="footer-title"> Contact </div>
            <div className="footer-text">
              <div>
                If you have any questions, feel free to contact me. I am open to 
                opportunies and I just like helping when I can. Below is my email:
              </div>
              <a href="mailto:jerome.ong.ronquillo@gmail.com">
                <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>  
      </footer>
        
      
    </div>
    );
  }
  
}

export default App;
