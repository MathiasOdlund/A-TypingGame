import React, { Component } from "react";
//Importing syling
import "./Profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-container">
          <div className="left-box">
            {/*Profile image */}
            <img src="" id="user-image" alt="" />
            {/*Profile Name */}
            <h1 id="user-name">Name</h1>
            {/*Keyboard layout  Default QWERTY*/}
            <h2 id="user-keyboardlayout">QWERTY</h2>
            {/*Current typing speed */}
            <h3 id="user-avrage-speed">speed - wpm</h3>
          </div>
          <div className="right-box">
            {/*User statistic */}
            <div className="personal-score">
              <h1>Personal Top</h1>
              <table>
                <tr>
                  <th>Time</th>
                  <th>Wpm</th>
                  <th>Raw</th>
                  <th>Accuracy</th>
                </tr>
                <tr className="grey">
                  <td>15</td>
                  <td>30</td>
                  <td>94</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>40</td>
                  <td>94</td>
                  <td>60%</td>
                </tr>
                <tr className="grey">
                  <td>60</td>
                  <td>50</td>
                  <td>94</td>
                  <td>60%</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
