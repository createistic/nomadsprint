import { Button } from "createistic-designsystem";
import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = (): React.ReactElement => {
  const history = useHistory();
  return (
    <div className="Notes">
      <h1>Displaying events...</h1>
      <div className="BoxContainer">
        <div className="Box">Event 1</div>
        <div className="Box">Event 2</div>
        <div className="Box">Event 3</div>
      </div>
      <Button type="primary" text="Create a new event" onClick={() => history.push("/new")} />
    </div>
  );
};

export default LandingPage;
