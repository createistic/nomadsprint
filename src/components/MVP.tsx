import React from "react";
import { Button } from "createistic-designsystem";
import { useHistory } from "react-router-dom";

const MVP = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Nav bar</h1>
      <h1>MVP HERE</h1>
      <Button type="primary" text="Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default MVP;
