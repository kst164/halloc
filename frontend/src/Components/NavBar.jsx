import React, { Component } from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom';
class NavBar extends Component {
  //State contains options that need to be rendered on NavBar
  state = {
    options: [
      { name: "Home", link: "/" },
      { name: "Sign In", link: "/login" },
      { name: "FAQ", link: "#FAQ" },
    ],
  };

  //Function to render options (from state)
  renderOptions = () => {
    return this.state.options.map((myOption) => {
      console.log(myOption);
      return (
        <li key={myOption.name} className="nav-item fs-4">
          <Link className="nav-link text-end" to={myOption.link}>
            {myOption.name}
          </Link>
        </li>
      );
    });
  };

  //Actually does sh*t
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand fw-bold fs-2" to="/">
          HALLOC
        </Link>

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
