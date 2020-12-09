import React, { useContext } from "react";
import { Button } from "createistic-designsystem";
import { useParams } from "react-router-dom";
import { UserContext } from "../services/appContexts";

const Event = (): React.ReactElement => {
  const context = useContext(UserContext);
  const params: { id: string } = useParams();

  return (
    <div className="Notes">
      <h1 className="H1Banner">Event Details</h1>
      <div className="App-content">
        {context.eventData &&
          context.eventData
            .filter((d) => d.id === params.id)
            .map((d) => {
              return (
                <div key={d.id}>
                  <p>Name: {d.name}</p>
                  <p>Location: {d.location}</p>
                  <p>More details coming soon...</p>
                </div>
              );
            })}
        {
          <Button
            type="primary"
            text="Apply to join"
            onClick={() => {
              if (!context.verified) {
                alert("Please complete verification in the My Profile section");
              } else {
                alert("Thank you for your application 😀");
              }
            }}
          />
        }
      </div>
    </div>
  );
};

export default Event;
