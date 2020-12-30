// External modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Internal modules
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Pages/Signup/Components/Signup';
import Login from './Pages/Login/Components/Login';
import Profile from './Pages/Profile/Components/Profile';
import Leaderboard from './Pages/Leaderboard/Components/Leaderboard';
import News from './Pages/News/Components/News';
import Home from './Pages/Home/Components/Home';

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/news" component={News} />
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
