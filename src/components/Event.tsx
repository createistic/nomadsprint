import React, { useContext } from "react";
import { Button } from "createistic-designsystem";
import { useParams } from "react-router-dom";
import { UserContext } from "../services/appContexts";

const Event = (): React.ReactElement => {
  const context = useContext(UserContext);
  const params: { id: string } = useParams();

  return (
    <div className="Notes">
      {context.eventData &&
        context.eventData
          .filter((d) => d.id === params.id)
          .map((d) => {
            return (
              <div key={d.id}>
                <div>{d.name}</div>
                <div>{d.location}</div>
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
  );
};

export default Event;
