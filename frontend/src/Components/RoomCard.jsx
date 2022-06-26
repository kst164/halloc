import React, { Component } from "react";
import "./RoomCard.css";

class RoomCard extends Component {
  //Properties contain:
  //1. Room Number (roomNumber)
  //2. Occupant Name (masterName)
  //3. Occupant Roll Number (masterRoll)
  //4. Occupant 2 Name (otherName)
  //5. Occupant 2 Roll Number (otherRoll)
  //6. Occupant Number (occupants)

  render() {
    if(this.props.occupants === 1){
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
    );}
    else if(this.props.occupants === 2){
      return (
      
        <div className="card text-center case-counter">
          <div className="card-header">
            <h2>ROOM NUMBER #{this.props.roomNumber}</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">Room Member 1: </h5>
            <p className="card-text">
              <div class="name">{this.props.masterName}</div>
              <div class="roll-no">{this.props.masterRoll}</div>
            </p>
            <h5 className="card-title">Room Member 2: </h5>
            <p className="card-text">
              <div class="name">{this.props.otherName}</div>
              <div class="roll-no">{this.props.otherRoll}</div>
            </p>
          </div>
        </div>
      );
    }
  }
}

export default RoomCard;
