import { Button } from "createistic-designsystem";
import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = (): React.ReactElement => {
  const history = useHistory();
  return (
    <div className="Notes">
      <h1>Displaying events...</h1>
      {/* <h1>Section 1 - Hero headline</h1>
      <h1>Section 2 - Try MVP</h1>
      <h1>Section 3 - Collect Email</h1> */}
      <div className="BoxContainer">
        <div className="Box">1</div>
        <div className="Box">2</div>
        <div className="Box">3</div>
      </div>
      <Button
        type="primary"
        text="I am looking to organise an event"
        onClick={() => history.push("/new")}
      />
    </div>
  );
};

export default LandingPage;
