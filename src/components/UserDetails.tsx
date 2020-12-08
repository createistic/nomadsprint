import React from "react";
import { User } from "../services/utils";

const UserDetails: React.FC<{ user: User }> = ({ user }): React.ReactElement => (
  <div>
    <p>
      {user.title} {user.given_name} {user.family_name}
    </p>
    <p>{user.email}</p>
  </div>
);

export default UserDetails;
