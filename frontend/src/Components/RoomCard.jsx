import React, { Component } from "react";
import "./RoomCard.css";

class RoomCard extends Component {
  //Properties contain:
  //1. Room Number (roomNumber)
  //2. Occupant Name (masterName)
  //3. Occupant Roll Number (masterRoll)

  render() {
    return (
      <div className="card text-center case-counter">
        <div className="card-header">
          <h2>ROOM NUMBER #{this.props.roomNumber}</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Currently Occupied By: </h5>
          <p className="card-text">
            <div class="name">{this.props.masterName}</div>
            <div class="roll-no">{this.props.masterRoll}</div>
          </p>
        </div>
      </div>
    );
  }
}

export default RoomCard;
