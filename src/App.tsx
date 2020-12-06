import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Business from "./components/Business";
import Tech from "./components/Tech";
import UX from "./components/UX";
import MVP from "./components/MVP";
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
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/MVP">
            <MVP />
          </Route>
          <Route path="/ux">
            <UX />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
