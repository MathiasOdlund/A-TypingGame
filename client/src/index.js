import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Home from './Pages/Home/Components/Home';
import Navbar from './Components/Navbar/Navbar'
import Signup from "./Pages/Signup/Components/Signup"; // Temporary links to Signup for now. TO change back later.
import Login from "./Pages/Login/Components/Login";
import Profile from './Pages/Profile/Components/Profile'
ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Profile />
  </React.StrictMode>,
  document.getElementById("root")
);
