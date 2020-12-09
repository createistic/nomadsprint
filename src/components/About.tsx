import React from "react";
import { Button } from "createistic-designsystem";
import { useHistory } from "react-router-dom";

interface IAboutProps {
  setVerified: (code: string) => void;
}

const About: React.FC<IAboutProps> = ({ setVerified }): React.ReactElement => {
  const history = useHistory();
  return (
    <div className="Notes">
      <h1>About</h1>
      <p>Nomad Sprint offers a unique work experiences.</p>
      <p>Leave your email, to receive updates</p>
      <Button
        type="primary"
        text="Reset verification"
        onClick={() => {
          setVerified("");
          history.push("/");
        }}
      />
    </div>
  );
};

export default About;
