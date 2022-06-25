import React, { Component } from "react";
import FloorStats from "./FloorStats";
import "./SideBar.css";

class SideBar extends Component {
  state = {
    floors: [
      { level: 0, available: 24, booked: 0, occupied: 0 },
      { level: 1, available: 24, booked: 0, occupied: 0 },
      { level: 2, available: 24, booked: 0, occupied: 0 },
      { level: 3, available: 24, booked: 0, occupied: 0 },
      { level: 4, available: 24, booked: 0, occupied: 0 },
      { level: 5, available: 24, booked: 0, occupied: 0 },
      { level: 6, available: 24, booked: 0, occupied: 0 },
    ],
  };

  generateFloorStats = () => {
    return this.state.floors.map((myFloor) => {
      return (
        <React.Fragment>
          {/*Rendering Floor number*/}
          <a>Floor #{myFloor.level}</a>

          {/*Rendering Breadcrumbs*/}
          <ol class="breadcrumb">
            <li class="breadcrumb-item avl">{myFloor.available}</li>
            <li class="breadcrumb-item bkd">{myFloor.booked}</li>
            <li class="breadcrumb-item occ">{myFloor.occupied}</li>
          </ol>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <div className="sidebar">
        <h4>Floor Stats</h4>
        {this.generateFloorStats()}
      </div>
    );
  }
}

export default SideBar;
