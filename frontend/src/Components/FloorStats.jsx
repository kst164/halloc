import React, { Component } from "react";

class FloorStats extends Component {
  state = {};

  //Render stuff (Each floor button and rooms' status)
  render() {
    return (
      <div className="floorStats">
        {/*Rendering Floor number*/}
        <a
          className="myFloor"
          onClick={() => {
            this.props.changeFloor(this.props.floor.level);
          }}
        >
          Floor #{this.props.floor.level}
        </a>

        {/*Rendering Breadcrumbs*/}
        <ol className="breadcrumb">
          <li className="breadcrumb-item avl">{this.props.floor.available}</li>
          <li className="breadcrumb-item bkd">{this.props.floor.booked}</li>
          <li className="breadcrumb-item occ">{this.props.floor.occupied}</li>
        </ol>
      </div>
    );
  }
}

export default FloorStats;
