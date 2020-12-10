import React, { useEffect, useContext } from "react";
import { Button } from "createistic-designsystem";
import SDKService from "../services/sdk.service";
import { SprintEvent, useQuery } from "../services/utils";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../services/appContexts";
import { getRecommendations } from "../services/ai.service";
import UserDetails from "./UserDetails";
import img from "../styles/user-female.png";
import badge from "../styles/verified-badge.svg";

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
  sprints: SprintEvent[];
}

const Profile: React.FC<IProfileProps> = ({ setVerified, sprints }): React.ReactElement => {
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

  const userEvents = context.user && context.user.events ? context.user.events : [];
  const recommendations = userEvents.length > 0 ? getRecommendations(userEvents, sprints) : [];

  return (
    <div className="Notes">
      <h1 className="H1Banner">Your details</h1>
      <div className="App-content">
        {context.verified && (
          <div>
            <img width={80} alt="verified" src={badge} style={{ float: "right" }} />
          </div>
        )}
        <img alt="user" src={img} height="250" />
        {context.user && <UserDetails user={context.user} />}
        <div>Status: {context.verified ? "Verified" : "Unverified"}</div>
        <p>{userEvents.length > 0 ? <span>Applications: {userEvents.length}</span> : null}</p>
        {userEvents.length > 0 && recommendations.length > 0 ? (
          <p>
            Other recommended events:{" "}
            {recommendations.map((e) => {
              return (
                <a key={e.id} href={`/event/${e.id}`}>
                  {e.name}
                </a>
              );
            })}
          </p>
        ) : null}
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
