import React, { Component } from "react";

class NavBar extends Component {
  state = {
    pageArr: ["Home", "Register", "Sign In", "FAQ"],
  };

  optionList = (optionArr) => {
    optionArr.map((page) => {
      return (
        <li className="nav-item fs-4">
          <a className="nav-link text-end" href="#Home">
            {page}
          </a>
        </li>
      );
    });
  };

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
          <ul className="navbar-nav">{this.optionList(this.state.pageArr)}</ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
