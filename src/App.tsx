import React from "react";
import Overview from "./components/Overview";
import Business from "./components/Business";
import Tech from "./components/Tech";
import UX from "./components/UX";
import MVP from "./components/MVP";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/mvp">
            <MVP />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
