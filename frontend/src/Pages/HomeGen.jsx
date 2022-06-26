import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import "./HomeGen.css";

class HomeGen extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="main">
          <div className="content">
            <h3>About HALLOC</h3>
            <p></p>

            <h3>Conditional Rendering</h3>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGen;
