import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleText from './Components/SampleText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Jerome Ronquillo',
    }
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon className="App-logo" icon={faCog} />
        <p>
           <code>{this.state.name}</code> 
        </p>
        
        <SampleText />

      </header>
    </div>
    );
  }
  
}

export default App;
