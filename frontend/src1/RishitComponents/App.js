import React, { Component } from 'react';
import './App.css';
import Grid from './Pages/grid';

class App extends Component {
  //States
  state = {
    floors: [
        {level: 0, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 1, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 2, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 3, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 4, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 5, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)},
        {level: 6, available: 24, booked: 0, occupied: 0, rooms: Array(24).fill(0)}
    ],
    currentLevel: null
  }

  //Functions
  selectFloor = (myFloor) => {
    //Console
    console.log("Floor #", myFloor.level, " has been selected!");
    
    //New Selection
    const newLevel = myFloor.level;
    this.setState({
      currentLevel: newLevel
    });
  }

  //Render App
  render() { 
    return (
      <Grid
        floors = {this.state.floors}
        selectFloor = {this.selectFloor}
        currentLevel = {this.state.currentLevel}
      />
    );
  }
}
 
export default App;
