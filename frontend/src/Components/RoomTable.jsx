import React, { Component } from "react";
import "./RoomTable.css";

class RoomTable extends Component {
  //Properties have been passed from MyRoom as an array of objects called "applicants" each having name, roll number

  //Function to render rows
  renderRow = () => {
    let i = 0;
    return this.props.applicants.map((myApplicant) => {
      i = i + 1;
      return (
        <tr>
          <th scope="row">{i}</th>
          <td>{myApplicant.roll}</td>
          <td>{myApplicant.name}</td>
          <td>
            <button type="button" className="btn btn-outline-info" onClick={()=>this.props.onClick(myApplicant.name,myApplicant.roll)}>
              Accept
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Name</th>
            <th scope="col">Acceptance</th>
          </tr>
        </thead>
        <tbody>{this.renderRow()}</tbody>
      </table>
    );
  }
}

export default RoomTable;
