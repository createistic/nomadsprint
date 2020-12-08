import React from "react";
import { IAppState } from "./utils";

const UserContext = React.createContext<IAppState>({});
export { UserContext };
