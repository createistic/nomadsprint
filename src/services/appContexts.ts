import React from "react";
import { IAppState } from "./utils";

const UserContext = React.createContext<IAppState>({ eventData: [], user: { events: [] } });
export { UserContext };
