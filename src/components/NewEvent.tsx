import React, { useState } from "react";
import { Button } from "createistic-designsystem";
import { SprintEvent } from "../services/utils";
import { useHistory } from "react-router-dom";
// import NewEventForm from "./NewEventForm";

interface IProfileProps {
  addEvent: (sprint: SprintEvent) => void;
  newId: string;
}

interface IFormData {
  name?: string;
  location?: string;
}

const NewEvent: React.FC<IProfileProps> = ({ addEvent, newId }): React.ReactElement => {
  const [data, setData] = useState<IFormData>({});
  const history = useHistory();
  return (
    <div className="Notes">
      <h1 className="H1Banner">Create your dream work experience</h1>
      <div className="App-content">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setData((prevState) => ({ ...prevState, name: e.target.value }))}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setData((prevState) => ({ ...prevState, location: e.target.value }))}
        />
        <Button
          text="Submit"
          onClick={() => {
            if (!data.name || !data.location) {
              alert("please complete the form");
              return;
            }
            addEvent({ id: newId, name: data.name, location: data.location });
            history.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default NewEvent;
