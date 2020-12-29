// External modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Internal modules
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Pages/Signup/Components/Signup';
import Login from './Pages/Login/Components/Login';
import Profile from './Pages/Profile/Components/Profile';
import Leaderboard from './Pages/Leaderboard/Components/Leaderboard';
import News from './Pages/News/Components/News';
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <ScrollToTop />
      <Switch>
        {/*Home directory */}
        <Route exact path="/">
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
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/news" component={News} />
        <Route path='*'>
            <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
