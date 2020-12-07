import React, { useState, useEffect } from "react";
import { Button } from "createistic-designsystem";
import SDKService from "../services/sdk.service";

// We may receive a code back once verified e.g lM3DPo5VpVBi55Jrl1f6rn_OMBMpMToLbDZ6xbq_Bhc
// Store this in our DB along with an identifier for the user (email)

interface IUser {
  title?: string;
  email?: string;
  given_name?: string;
  family_name?: string;
}

interface IState {
  user?: IUser;
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

const UserDetails: React.FC<{ user: IUser }> = ({ user }): React.ReactElement => (
  <div>
    <p>
      {user.title} {user.given_name} {user.family_name}
    </p>
    <p>{user.email}</p>
  </div>
);

const Profile = (): React.ReactElement => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    getUserData().then((data) => {
      console.log("d:", data);
      setState((prevState) => ({ ...prevState, user: data, set: true }));
    });
  }, []);

  console.log("state:", state);

  return (
    <div className="Notes">
      <h1>Your details</h1>
      {state.user && <UserDetails user={state.user} />}
      {state.user && state.user.email && <h1></h1>}
      <Button type="primary" text="Get verified" onClick={initiateAuth} />
    </div>
  );
};

export default Profile;
