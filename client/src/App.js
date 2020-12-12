import "./App.css";
//Importing react routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importing pages
import Home from "./Pages/Home/Home";
import Profile from "./Pages/User/Profile/Profile";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/*Home directory */}
          <Route exact id="home-directory" path="/">
            <Home />
          </Route>
          {/*Profile directory */}
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
