import React from "react";
import { User } from "../services/utils";

const UserDetails: React.FC<{ user: User }> = ({ user }): React.ReactElement => (
  <div>
    <p>
      Name: {user.title} {user.given_name} {user.family_name}
    </p>
    {user.email && <p>Email: {user.email}</p>}
  </div>
);

export default UserDetails;
