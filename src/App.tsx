import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import NewEvent from "./components/NewEvent";
import Event from "./components/Event";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import SDKService from "./services/sdk.service";
import { UserContext } from "./services/appContexts";
import Modal from "./components/Modal";
import { IAppState, SprintEvent, testData } from "./services/utils";
import "./styles/App.css";

// const getUserData = async () => {
//   const res = await SDKService.getUserInfo();
//   return res.data;
// };

const App = (): ReactElement => {
  const hasLocation = window && window.location;
  const [state, setState] = useState<IAppState>({ eventData: [], user: { events: [] } });

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
  // useEffect(() => {
  //   getUserData().then((data) => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       user: { ...data, ...prevState.user },
  //     }));
  //   });
  // }, [state.verified]);

  // Sync state changes to local storage
  useEffect(() => {
    localStorage.setItem("localState", JSON.stringify(state));
  }, [state.user, state.eventData, state.verified, state.user.events.length, state.message]);

  const setVerified = (code: string) => {
    setState((prevState) => ({ ...prevState, verified: code }));
  };

  const setMessage = (msg: string) => {
    setState((prevState) => ({ ...prevState, message: msg }));
  };

  const addEvent = (sprint: SprintEvent) => {
    setState((prevState) => ({ ...prevState, eventData: [...prevState.eventData, sprint] }));
  };

  const addAttendance = (id: string) => {
    setState((prevState) => {
      const events = prevState.user.events.includes(id)
        ? prevState.user.events
        : prevState.user.events.concat(id);
      return {
        ...prevState,
        user: { ...prevState.user, events },
      };
    });
  };

  return (
    <Router>
      <UserContext.Provider value={{ ...state }}>
        <div className="App">
          {state.message && <Modal message={state.message} onClose={() => setMessage("")} />}
          <div className="App-body">
            <Navbar />
            <div>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/new">
                  <NewEvent addEvent={addEvent} newId={`${state.eventData.length + 1}`} />
                </Route>
                <Route exact path="/profile">
                  <Profile sprints={state.eventData} setVerified={setVerified} />
                </Route>
                <Route exact path="/event/:id">
                  <Event setMessage={setMessage} addAttendance={addAttendance} />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
