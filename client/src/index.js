import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Home from './Pages/Home/Components/Home';
import Signup from "./Pages/Signup/Components/Signup"; // Temporary links to Signup for now. TO change back later.
import Login from "./Pages/Login/Components/Login";
ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById("root")
);
