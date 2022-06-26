import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import FloorStats from "./FloorStats";
import "./SideBar.css";

//Note: We are required to remove state variables and use property variables instead to ensure the single source of truth
//Note: The required property variables will be passed onto Rooms.jsx from render() method of Grid.jsx

//PPS: Try putting generate FloorStats, either to support creation of className = "floorStats" or push the function to Grid.jsx

class SideBar extends Component {
  // state = {
  //   floors: [
  //     { level: 0, available: 24, booked: 0, occupied: 0 },
  //     { level: 1, available: 24, booked: 0, occupied: 0 },
  //     { level: 2, available: 24, booked: 0, occupied: 0 },
  //     { level: 3, available: 24, booked: 0, occupied: 0 },
  //     { level: 4, available: 24, booked: 0, occupied: 0 },
  //     { level: 5, available: 24, booked: 0, occupied: 0 },
  //     { level: 6, available: 24, booked: 0, occupied: 0 },
  //   ],
  //   currentLevel: null,
  // };

  //Method to change current floor (current changes only on console)
  // changeFloor = (myFloorLevel) => {
  //   console.log(this.state.currentLevel);
  //   this.setState({
  //     currentLevel: myFloorLevel,
  //   });
  // };

  //Generates all floors mapped from this.state.floors
  //Passes each floor and changeFloor() methods to FloorStats object
  //PS: Don't push this higher, required here only! When pushing states to Grid.jsx, we will change state to props and pass from above.
  generateFloorStats = () => {
    return this.props.floors.map((myFloor) => {
      return (
        <FloorStats
          key={myFloor.level}
          floor={myFloor}
          changeFloor={this.props.changeFloor}
        />
      );
    });
  };

  //Actually does sh*t
  render() {
    return (
      <div className="sidebar">
        <h4>Floor Stats</h4>
        {this.generateFloorStats()}
        <div className="floorStats">
          {/*Legend*/}
          <a className>
            <em>Legend</em>
          </a>

          {/*Rendering Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item avl">Available</li>
            <li className="breadcrumb-item bkd">Booked</li>
            <li className="breadcrumb-item occ">Occupied</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default SideBar;
