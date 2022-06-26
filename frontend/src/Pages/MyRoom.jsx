import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import RoomCard from "../Components/RoomCard";
import RoomTable from "../Components/RoomTable";

import "./MyRoom.css";

class MyRoom extends Component {
  //State variables contain room number, room occupant name + roll_num, applicants
  state = {
    roomNumber: 92,
    occupants: 1,
    masterName: "Rishit D",
    masterRoll: "cs21btech11053",
    otherName: null,
    otherRoll: null,
    applicants: [
      { name: "Rahul", roll: "cs21btech11049" },
      { name: "Kushagra", roll: "cs21btech11033" },
      { name: "Kartheek", roll: "cs21btech11028" },
      { name: "Rutv", roll: "ma21btech11014" },
    ],
  };

  onClick = (namestring, rollstring) => {
    const otherName = namestring;
    const otherRoll = rollstring;
    this.setState({
      otherName: otherName,
      otherRoll: otherRoll,
      applicants: [],
      occupants: 2
    })
    console.log(this.state.otherName);
  }

  //Render passes on room number, room occupant details to Card, applicants to Table
  render() {

    if(this.state.occupants === 0){
      return(
        <div className="home">
        <NavBar />
        <div className="main">
          <h1>You haven't selected a room yet</h1>
        </div>
        </div>
      );
    }
    else if(this.state.occupants === 1){
      return (
        <div className="home">
          <NavBar />
          <div className="main">
            <RoomCard
              roomNumber={this.state.roomNumber}
              masterName={this.state.masterName}
              masterRoll={this.state.masterRoll}
              otherName={this.state.otherName}
              otherRoll={this.state.otherRoll}
              occupants={this.state.occupants}
            />
            <RoomTable 
            applicants={this.state.applicants}
            onClick = {(namestring, rollstring) => this.onClick(namestring, rollstring)}
            />
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="home">
          <NavBar />
          <div className="main">
            <RoomCard
              roomNumber={this.state.roomNumber}
              masterName={this.state.masterName}
              masterRoll={this.state.masterRoll}
              otherName={this.state.otherName}
              otherRoll={this.state.otherRoll}
              occupants={this.state.occupants}
            />
          </div>
        </div>
      );
    }
    
  }
}

export default MyRoom;
