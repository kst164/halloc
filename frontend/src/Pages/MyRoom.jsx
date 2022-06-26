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
      { name: "Rahul", roll: "cs21btech11047" },
      { name: "Kushagra", roll: "cs21btech11033" },
      { name: "Kartheek", roll: "cs21btech11028" },
      { name: "Rutv", roll: "ma21btech11014" },
    ],
  };

  //Render passes on room number, room occupant details to Card, applicants to Table
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="main">
          <RoomCard
            roomNumber={this.state.roomNumber}
            masterName={this.state.masterName}
            masterRoll={this.state.masterRoll}
          />
          <RoomTable applicants={this.state.applicants} />
        </div>
      </div>
    );
  }
}

export default MyRoom;
