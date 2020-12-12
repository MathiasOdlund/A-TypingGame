import React, { Component } from "react";
//Importing styling
import "./Home.css";
//Importing some components
import Navbar from "../../Components/Navbar/Navbar";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
