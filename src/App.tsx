import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Banner from "./components/Banner";
import SDKService from "./services/sdk.service";
import { UserContext } from "./services/appContexts";
import { IAppState, testData } from "./services/utils";
import "./styles/App.css";

const getUserData = async () => {
  const res = await SDKService.getUserInfo();
  return res.data;
};

const App = (): ReactElement => {
  const hasLocation = window && window.location;
  const [state, setState] = useState<IAppState>({});

  // Hydrate from local storage
  useEffect(() => {
    const localState = localStorage.getItem("localState");
    const updatedState = localState ? JSON.parse(localState) : {};
    if (!updatedState.eventData) {
      updatedState.eventData = testData;
    }
    setState((prevState) => ({ ...prevState, ...updatedState }));
  }, []);

  // Handle trailing space issue
  useEffect(() => {
    if (hasLocation) {
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

  // Sync state changes to local storage
  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state.user, state.eventData, state.verified]);

  const setVerified = (code: string) => {
    setState((prevState) => ({ ...prevState, verified: code }));
  };

  return (
    <Router>
      <UserContext.Provider value={{ ...state }}>
        <div className="App">
          <div className="App-body">
            <Navbar />
            <div>
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
                <Profile setVerified={setVerified} />
              </Route>
              <Route path="/event/:id">
                <Event />
              </Route>
            </div>
          </div>
          {/* <Banner /> */}
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
