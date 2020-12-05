import React from "react";
import Overview from "./components/Overview";
import Business from "./components/Business";
import Tech from "./components/Tech";
import UX from "./components/UX";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";
import Navbar from "./RouteComponents/Navbar";
import "./App.css";

function App() {
  return (
    <Switch>
      <div className="App">
        <Navbar />
        <div className="App-body">
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/ux">
            <UX />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
        </div>
      </div>
    </Switch>
  );
}

export default App;
