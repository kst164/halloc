import React, { Component } from "react";
// import Stats from "../Components/stats";
// import FloorPlan from "../Components/floorPlan";
import "./Grid.css";
import Floor from "../Components/Floors";

class Grid extends Component {
 
    //state
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
   
    
    // //Functions
    // selectFloor = (myFloor) => {
    // //Console
    // console.log("Floor #", myFloor.level, " has been selected!");
    
    // //New Selection
    // const newLevel = myFloor.level;
    // this.setState({
    //   currentLevel: newLevel
    // });
    // }


  handleClick = (i,j) => {
      let key = j;
      this.setState(prevState => ({
        floors: prevState.floors.map(
          e => {
            if(!(e.level === key)) return e;
            else{
              if(e.rooms[i] === 0){
                let duproom = e.rooms.slice();
                duproom[i]++;
                return {...e, available: e.available - 1, booked: e.booked + 1, rooms: duproom };
              }
              else if(e.rooms[i] === 1){
                let duproom = e.rooms.slice();
                duproom[i]++;
                return {...e, occupied: e.occupied - 1, booked: e.booked - 1, rooms: duproom };
              }
              else return e;
            }
          }
        )

      }))
      // if(rooms[i] === 0)
      // {
      //   rooms[i]++;
      //   available--;
      //   booked++;

      // }
      // else if(rooms[i] === 1)
      // {
      //   rooms[i]++;
      //   booked--;
      //   occupied++;

      // }

      //   this.setState({
      //     rooms: rooms,
      //     available: available,
      //     booked: booked,
      //     occupied: occupied,
      //   });
  }


    renderFloor(j){
      return(
      <Floor 
      floorno = {this.state.floors[j].level}
      rooms = {this.state.floors[j].rooms}
      available = {this.state.floors[j].available}
      booked = {this.state.floors[j].booked}
      occupied = {this.state.floors[j].occupied}
      handleClick2 = {(i) => this.handleClick(i,j)}
      />
      );
    }

    render(){

    return (
      <div className="container">
        <div className="header">
          {/* <NavBar /> */}
        </div>
        <div className="main">
          <div className="column1">
            {/* <Stats
              floors={this.props.floors}
              selectFloor={this.props.selectFloor}
              currentLevel={this.props.currentLevel}
            /> */}
          </div>
          <div className="column2">
            {/* <FloorPlan currentLevel={this.props.currentLevel} /> */}
          </div>
          <div className="poor">
            {this.renderFloor(5)}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
