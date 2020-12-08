import React, { useState, useEffect } from "react";
import { Button } from "createistic-designsystem";
import SDKService from "../services/sdk.service";
import { User } from "../services/utils";
import { useLocation, useHistory } from "react-router-dom";

interface IState {
  user?: User;
  verified?: string;
  set: boolean;
}

const initialState: IState = {
  user: undefined,
  set: false,
};

const initiateAuth = async () => {
  console.log("initiate clicked");
  try {
    const res = await SDKService.getVerificationLink();
    console.log(res);
    window.location.href = res.data;
  } catch (e) {
    console.log(e);
  }
};

const getUserData = async () => {
  const res = await SDKService.getUserInfo();
  return res.data;
};

const UserDetails: React.FC<{ user: User }> = ({ user }): React.ReactElement => (
  <div>
    <p>
      {user.title} {user.given_name} {user.family_name}
    </p>
    <p>{user.email}</p>
  </div>
);

const useQuery = (search: string) => {
  return new URLSearchParams(search);
};

const Profile = (): React.ReactElement => {
  const loc = useLocation();
  const history = useHistory();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const code = useQuery(loc.search).get("code");
    if (code) {
      setState((prevState) => ({ ...prevState, verified: "loading" }));
      SDKService.postToken(code).then(() => {
        history.push("/profile");
        setState((prevState) => ({ ...prevState, verified: code }));
      });
    }
  }, []);

  const verified = state.verified && state.verified !== "loading";

  useEffect(() => {
    getUserData().then((data) => {
      setState((prevState) => ({ ...prevState, user: data, set: true }));
    });
  }, [verified]);

  return (
    <div className="Notes">
      <h1>Your details</h1>
      {state.user && <UserDetails user={state.user} />}
      {verified && <div>Verified</div>}
      <Button type="primary" text="Get verified" onClick={initiateAuth} />
    </div>
  );
};

export default Profile;
