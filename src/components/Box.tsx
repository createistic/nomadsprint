import React from "react";
import { SprintEvent } from "../services/utils";
import { Link } from "react-router-dom";

const Box: React.FC<{ event: SprintEvent }> = ({ event }): React.ReactElement => (
  <div className="Box">
    <div>{event.name}</div>
    <div>{event.location}</div>
    <Link to={`/event/${event.id}`}>See details</Link>
  </div>
);

export default Box;
