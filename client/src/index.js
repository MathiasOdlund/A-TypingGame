//Imporcting external components
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import internal components
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/Signup/Components/Signup"; // Temporary links to Signup for now. TO change back later.
import Login from "./Pages/Login/Components/Login";
import Profile from "./Pages/Profile/Components/Profile";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/*Home directory */}
        <Route exact path="/">
          <Navbar />
        </Route>
        {/* Signup Directory*/}
        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* Signup Directory*/}
        <Route exact path="/login">
          <Login />
        </Route>
        {/* Profile Directory*/}
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
