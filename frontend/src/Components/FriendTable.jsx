import React, { Component } from "react";

class FriendTable extends Component {
  //Render each list
  renderFriend = () => {
    let i = 0;
    return this.props.occupants.map((myOccupant) => {
      i = i + 1;
      return (
        <tr>
          <th scope="row">{i}</th>
          <td>{myOccupant.roll}</td>
          <td>{myOccupant.name}</td>
          <td>{myOccupant.roomNum}</td>
        </tr>
      );
    });
  };

  //Renders all people who have singly occupied a room
  render() {
    return (
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Name</th>
            <th scope="col">Room Number</th>
          </tr>
        </thead>
        <tbody>{this.renderFriend()}</tbody>
      </table>
    );
  }
}

export default FriendTable;
