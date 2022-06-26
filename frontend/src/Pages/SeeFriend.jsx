import React, { Component } from "react";
import FriendTable from "../Components/FriendTable";
import NavBar from "../Components/NavBar";
import "./SeeFriend.css";

class SeeFriend extends Component {
  state = {
    occupants: [
      { name: "Rahul", roll: "cs21btech11049", roomNum: 1 },
      { name: "Kushagra", roll: "cs21btech11033", roomNum: 2 },
      { name: "Kartheek", roll: "cs21btech11028", roomNum: 3 },
      { name: "Rutv", roll: "ma21btech11014", roomNum: 4 },
    ],
  };

  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="main">
          <h3>Occupants: </h3>
          <FriendTable occupants={this.state.occupants} />
        </div>
      </div>
    );
  }
}

export default SeeFriend;
