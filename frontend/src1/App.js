import React from 'react';
import './App.css';
//import Floor from './components/Floors.jsx';
//import NavBar from './components/NavBar.jsx';
import Grid from './Pages/grid.jsx';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid />
      </React.Fragment>
    );
  }
}

