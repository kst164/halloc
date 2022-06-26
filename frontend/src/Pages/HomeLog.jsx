import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import "./HomeLog.css";

class HomeLog extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="main">
          <div className="content">
            <h3>YOU ARE LOGGED IN</h3>
            <h3>About HALLOC</h3>
            <p>
              <em>HALLOC</em> or <em>Hostel ALLOCation</em> is designed to help
              IITH students select their Hostel rooms efficiently with minimal
              conflicts. Every student has the following options available upon
              logging in through his/her IITH email id:
            </p>

            <h4>Grid</h4>
            <p>
              The "Grid" page allows you to select and view hostel rooms
              (floor-wise). The page is refreshed on a continuous basis to
              ensure updated information is available to the student.
            </p>

            <h4>MyRoom</h4>
            <p>
              This page shows all people who have applied to be your roommate if
              you're looking for one. You can accept one of them and he/she will
              be assigned to be your roommate. Note this only works if you
              already have a room.
            </p>

            <h4>See Friends</h4>
            <p>
              This page allows you to see all people who have a room but are
              looking for a roommate. This makes it easier for people to contact
              others and become roommates.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLog;
