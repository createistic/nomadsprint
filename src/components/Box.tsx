import React from "react";
import { bgUrls, SprintEvent } from "../services/utils";
import { useHistory } from "react-router-dom";

const Box: React.FC<{ event: SprintEvent }> = ({ event }): React.ReactElement => {
  const history = useHistory();
  let index = parseInt(event.id);
  if (index >= bgUrls.length) {
    index = Math.max(index - bgUrls.length, 0);
  }

  return (
    <div
      className="Box"
      style={{
        background: `url(${bgUrls[index]}) repeat center`,
        cursor: "pointer",
      }}
      onClick={() => history.push(`/event/${event.id}`)}
    >
      <span
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: 5,
          marginBottom: 10,
          display: "block",
        }}
      >
        {event.name}
      </span>
      <span style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", padding: 5, color: "#FFF" }}>
        {event.location}
      </span>
      {event.funding && (
        <span style={{ backgroundColor: "rgba(90, 97, 174, 0.75)", padding: 5, color: "#FFF" }}>
          Funded
        </span>
      )}
      <span
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: 5,
          marginTop: 200,
          display: "block",
        }}
      >
        Click for more details
      </span>
    </div>
  );
};

export default Box;
