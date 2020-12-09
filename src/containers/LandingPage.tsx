import { Button } from "createistic-designsystem";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Box from "../components/Box";
import { UserContext } from "../services/appContexts";

const LandingPage = (): React.ReactElement => {
  const history = useHistory();
  const context = useContext(UserContext);

  return (
    <div className="Notes">
      <h1 className="H1Banner">Find your next work adventure...</h1>
      <div className="App-content">
        <div className="BoxContainer">
          {context.eventData.map((data) => {
            return <Box key={data.id} event={data} />;
          })}
        </div>
        <Button type="primary" text="Create a new event" onClick={() => history.push("/new")} />
      </div>
    </div>
  );
};

export default LandingPage;
