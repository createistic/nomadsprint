import React, { ReactElement, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = (): ReactElement => {
  const hasLocation = window && window.location;
  useEffect(() => {
    if (hasLocation) {
      console.log(window.location);
      if (window.location.href && window.location.href.includes("/?code=")) {
        window.location.href = window.location.href.replace("/?code=", "/profile?code=");
      }
    }
  }, [hasLocation]);

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
