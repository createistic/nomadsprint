import React, { useContext } from "react";
import { Button } from "createistic-designsystem";
import { useParams } from "react-router-dom";
import { UserContext } from "../services/appContexts";
import { bgUrls } from "../services/utils";

interface IEventProps {
  addAttendance: (id: string) => void;
  setMessage: (msg: string) => void;
}

const Event: React.FC<IEventProps> = ({ addAttendance, setMessage }): React.ReactElement => {
  const context = useContext(UserContext);
  const params: { id: string } = useParams();
  let index = parseInt(params.id);
  if (index >= bgUrls.length) {
    index = Math.max(index - bgUrls.length, 0);
  }

  return (
    <div className="Notes">
      <h1 className="H1Banner">Event Details</h1>
      <div className="App-content">
        <img height="300" alt="travel" src={`${bgUrls[index]}`} />
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
            style={{ marginTop: 30 }}
            type="primary"
            text="Apply to join"
            onClick={() => {
              if (!context.verified) {
                setMessage("Please complete verification in the My Profile section");
              } else {
                addAttendance(params.id);
                setMessage("Thank you for your application :)");
              }
            }}
          />
        }
      </div>
    </div>
  );
};

export default Event;
