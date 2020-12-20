// External modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Internal modules
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Pages/Signup/Components/Signup';
import Login from './Pages/Login/Components/Login';
import Profile from './Pages/Profile/Components/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Switch>
        {/*Home directory */}
        <Route exact path="/">
          <Navbar />
        </Route>
        {/* Signup Directory*/}
        <Route exact path="/signup">
          <Navbar />
          <Signup />
        </Route>
        {/* Signup Directory*/}
        <Route exact path="/login">
          <Navbar />
          <Login />
        </Route>
        {/* Profile Directory*/}
        <Route exact path="/profile">
          <Navbar />
          <Profile />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
