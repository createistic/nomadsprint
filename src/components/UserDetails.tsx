import React from "react";
import { User } from "../services/utils";

const UserDetails: React.FC<{ user: User }> = ({ user }): React.ReactElement => {
  const { title = "Mr", given_name = "Harry", family_name = "Hilton" } = user;
  return (
    <div>
      <p>
        Name: {title} {given_name} {family_name}
      </p>
      {user.email && <p>Email: {user.email}</p>}
    </div>
  );
};

export default UserDetails;
