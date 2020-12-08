import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = (): ReactElement => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-body">
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/new">
            <NewEvent />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/event/:id">
            <Event />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
