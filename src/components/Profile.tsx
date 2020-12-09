import React, { useEffect, useContext } from "react";
import { Button } from "createistic-designsystem";
import SDKService from "../services/sdk.service";
import { useQuery } from "../services/utils";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../services/appContexts";
import UserDetails from "./UserDetails";

const initiateAuth = async () => {
  try {
    const res = await SDKService.getVerificationLink();
    window.location.href = res.data;
  } catch (e) {
    console.log("Error:", e);
  }
};

interface IProfileProps {
  setVerified: (code: string) => void;
}

const Profile: React.FC<IProfileProps> = ({ setVerified }): React.ReactElement => {
  const loc = useLocation();
  const history = useHistory();
  const context = useContext(UserContext);

  useEffect(() => {
    const code = useQuery(loc.search).get("code");
    if (code) {
      SDKService.postToken(code).then(() => {
        history.push("/profile");
        setVerified(code);
      });
    }
  }, []);

  return (
    <div className="Notes">
      <h1 className="H1Banner">Your details</h1>
      <div className="App-content">
        {context.user && <UserDetails user={context.user} />}
        {context.verified && <div>You are verified!</div>}
        <br />
        {!context.verified && <Button type="primary" text="Get verified" onClick={initiateAuth} />}
        {context.verified && (
          <>
            <Button type="primary" text="Go to events" onClick={() => history.push("/")} />
            <Button
              type="primary"
              text="Reset verification"
              onClick={() => {
                setVerified("");
                history.push("/");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
