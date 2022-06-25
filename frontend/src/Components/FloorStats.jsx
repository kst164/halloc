import React, { Component } from "react";

class FloorStats extends Component {
  state = {};

  //Render stuff
  render() {
    return (
      <React.Fragment>
        {/*Render the anchor tag*/}
        <a href="#sh*t">Floor #{this.props.level}</a>

        {/*Breadcrumbs*/}
        <ol class="breadcrumb">
          <li class="breadcrumb-item avl">{this.props.available}</li>
          <li class="breadcrumb-item bkd">{this.props.booked}</li>
          <li class="breadcrumb-item occ">{this.props.occupied}</li>
        </ol>
      </React.Fragment>
    );
  }
}

export default FloorStats;
