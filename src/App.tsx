import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import SDKService from "./services/sdk.service";
import { UserContext } from "./services/appContexts";
import { IAppState } from "./services/utils";
import "./styles/App.css";

const getUserData = async () => {
  const res = await SDKService.getUserInfo();
  return res.data;
};

const App = (): ReactElement => {
  const hasLocation = window && window.location;
  const [state, setState] = useState<IAppState>({});

  // Handle trailing space issue
  useEffect(() => {
    if (hasLocation) {
      console.log(window.location);
      if (window.location.href && window.location.href.includes("/?code=")) {
        if (!window.location.href.includes("localhost")) {
          window.location.href = window.location.href.replace("/?code=", "/profile?code=");
        }
      }
    }
  }, [hasLocation]);

  // Set the logged in user, we are hilton
  useEffect(() => {
    getUserData().then((data) => {
      setState((prevState) => ({ ...prevState, user: data }));
    });
  }, [state.verified]);

  return (
    <Router>
      <UserContext.Provider value={{ ...state }}>
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
              <Profile
                setVerified={(code) => {
                  console.log(code);
                  setState((prevState) => ({ ...prevState, verified: code }));
                }}
              />
            </Route>
            <Route path="/event/:id">
              <Event />
            </Route>
          </div>
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
