import React from "react";
import { Button } from "createistic-designsystem";
import { useHistory } from "react-router-dom";

const Overview = () => {
  const history = useHistory();
  return (
    <div className="Notes">
      <h1>Big Picture: We are creating</h1>
      <li>1 Presentation for judges</li>
      <li>1 MVP of our product (Figma / coded)</li>
      <li>1 Video each explaining some details</li>
      <li>1 Design system</li>

      <h1>Final Presentation</h1>
      <li>Presententation of aroud 12 slides</li>
      <li>3 slides on Business / market</li>
      <li>2 slides on UX / Design strategy</li>
      <li>2 slides on Development Strategy</li>
      <li>3 slides on their API usage</li>
      <li>2 slides on *WOW* factor (ML/AI/Speech recognition etc)</li>

      <h1>Team member roles:</h1>
      <li>
        <a href="/business">Business / Market (SF)</a>
      </li>
      <li>
        <a href="/ux">Design / UX (JB)</a>
      </li>
      <li>
        <a href="/tech">Tech / Development (RC)</a>
      </li>
      <p>
        There is cross-over on each area so we should all know the big picture.
        <br />
        Also know our deep dive areas well (Make a video explaining)
      </p>
      <h1>Team resources:</h1>
      <li>Figma (details given)</li>
      <li>
        URL for landing page <a href="https://createistic.github.io/web-landing/">HERE</a>
      </li>
      <li>
        URL for design system <a href="https://createistic.github.io/designsystem/">HERE</a>
      </li>
      <p style={{ marginTop: 40 }}>
        <Button text="Return Home" onClick={() => history.push("/")} />
      </p>
    </div>
  );
};

export default Overview;
