import React, { Component } from "react";
import FloorStats from "./FloorStats";

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

  render() {
    return (
      <div className="sidebar">
        <h4>Floor Stats</h4>
        {this.state.floors.map((myFloor) => {
          <FloorStats
            level={myFloor.level}
            available={myFloor.available}
            booked={myFloor.booked}
            occupied={myFloor.occupied}
          />;
        })}
      </div>
    );
  }
}

export default SideBar;
