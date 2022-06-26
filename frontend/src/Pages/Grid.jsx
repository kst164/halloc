import React, { Component } from "react";
// import Stats from "../Components/stats";
// import FloorPlan from "../Components/floorPlan";
import "./Grid.css";
import Floor from "../Components/Floors";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";

class Grid extends Component {
  //state
  state = {
    floors: [
      {
        level: 0,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 1,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 2,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 3,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 4,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 5,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
      {
        level: 6,
        available: 24,
        booked: 0,
        occupied: 0,
        rooms: Array(24).fill(0),
      },
    ],
    currentLevel: 5,
  };

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

  //Function to handle clicking a room (ith room of the jth floor)
  handleClick = (i, j) => {
    //Floor index
    let key = j;

    //Setting new State from Previous state
    this.setState((prevState) => ({
      floors: prevState.floors.map((e) => {
        //If not the same floor, return old values!
        if (!(e.level === key)) return e;
        //If same floor, modify status and room ocuupation separately
        else {
          //Case when the room goes from (available) -> (booked)
          if (e.rooms[i] === 0) {
            let duproom = e.rooms.slice();
            duproom[i]++;
            return {
              ...e,
              available: e.available - 1,
              booked: e.booked + 1,
              rooms: duproom,
            };
          }

          //Case when the room goes from (booked) -> (occupied)
          else if (e.rooms[i] === 1) {
            let duproom = e.rooms.slice();
            duproom[i]++;
            return {
              ...e,
              occupied: e.occupied + 1,
              booked: e.booked - 1,
              rooms: duproom,
            };
          }

          //Problematic Case
          else return e;
        }
      }),
    }));


    


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
  };

  changeFloor = (myFloorLevel) => {
    console.log(this.state.currentLevel);
    this.setState({
      currentLevel: myFloorLevel,
    });
  };

  //Renders the j^th floor (Note to use this through a mapping of state variables)
  renderFloor(j) {
    if(j === null){
      return(
        <h1>Please select a room</h1>
      )
    }
    else return (
      <Floor
        floorno={this.state.floors[j].level}
        rooms={this.state.floors[j].rooms}
        available={this.state.floors[j].available}
        booked={this.state.floors[j].booked}
        occupied={this.state.floors[j].occupied}
        handleClick2={(i) => this.handleClick(i, j)}
      />
    );
  }

  render() {
    return (
      <div className="grid">
        <NavBar />
        <div className="main">
          <SideBar
            floors={this.state.floors}
            currentLevel={this.state.currentLevel}
            changeFloor = {this.changeFloor}
          />
          <div class="floorPlan">{this.renderFloor(this.state.currentLevel)}</div>
        </div>
      </div>
    );
  }
}

export default Grid;
