import React from "react";
import { User } from "./utils";

interface IUserContext {
  user?: User;
  verified?: string;
}

const UserContext = React.createContext<IUserContext>({});
export { UserContext };
