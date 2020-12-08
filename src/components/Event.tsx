import React from "react";
import { Button } from "createistic-designsystem";
import { useParams } from "react-router-dom";
import { testData } from "../services/utils";

const Event = (): React.ReactElement => {
  const params: { id: string } = useParams();
  const evData = testData.filter((d) => d.id === params.id);

  return (
    <div className="Notes">
      <h1>{evData[0].name}</h1>
      <div>{evData[0].location}</div>
      <Button type="primary" text="Apply to join" onClick={() => alert("You must be verified")} />
    </div>
  );
};

export default Event;
