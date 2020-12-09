import { Button } from "createistic-designsystem";
import React from "react";
import { useHistory } from "react-router-dom";
import Box from "../components/Box";
import { testData } from "../services/utils";

const LandingPage = (): React.ReactElement => {
  const history = useHistory();
  return (
    <div className="Notes">
      <h1 className="H1Banner">Join your next work adventure...</h1>
      <div className="App-content">
        <div className="BoxContainer">
          {testData.map((data) => {
            return <Box key={data.id} event={data} />;
          })}
        </div>
        <Button type="primary" text="Create a new event" onClick={() => history.push("/new")} />
      </div>
    </div>
  );
};

export default LandingPage;
