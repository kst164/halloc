import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';

class App extends Component {
  state = {  } 
  
  render() { 
    return (
      <React.Fragment>
        <Home/>
      </React.Fragment>
    );
  }
}
 
export default App;