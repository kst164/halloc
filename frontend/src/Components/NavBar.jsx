import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  //State contains options that need to be rendered on NavBar
  state = {
    options: [
      { name: "Home", link: "#Home" },
      { name: "Sign In", link: "#SignIn" },
      { name: "FAQ", link: "#FAQ" },
    ],
  };

  //Function to render options (from state)
  renderOptions = () => {
    return this.state.options.map((myOption) => {
      <li className="nav-item fs-4">
        <a className="nav-link text-end" href={myOption.link}>
          {myOption.name}
        </a>
      </li>;
    });
  };

  //Actually does sh*t
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand fw-bold fs-2" href="#">
          Covid Management System
        </a>

        <div
          className="collapse navbar-collapse d-flex flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav">{this.renderOptions()}</ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
