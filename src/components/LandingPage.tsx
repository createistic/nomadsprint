import { Button } from "createistic-designsystem";
import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = (): React.ReactElement => {
  const history = useHistory();
  return (
    <div>
      <h1>Nav bar</h1>
      <h1>Section 1 - Hero headline</h1>
      <h1>Section 2 - Try MVP</h1>
      <h1>Section 3 - Collect Email</h1>
      <Button type="secondary" text="MVP" onClick={() => history.push("/mvp")} />
      <Button type="primary" text="Team notes" onClick={() => history.push("/overview")} />
    </div>
  );
};

export default LandingPage;
