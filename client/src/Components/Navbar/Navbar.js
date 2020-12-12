import React, { Component } from "react";
//Importing some styling
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <h1>A Typing Game</h1>
          </div>
        </div>
      </div>
    );
  }
}
