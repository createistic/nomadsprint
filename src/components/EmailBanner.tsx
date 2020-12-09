// import { Button } from "createistic-designsystem";
import React from "react";

const EmailBanner = (): React.ReactElement => (
  <div className="EmailBanner">
    <div>
      <h4>Stay up to date with progress by submitting your email address</h4>
    </div>
    <div style={lStyle.flex}>
      <div>
        <input style={lStyle.input} type="text" placeholder="email address" />
      </div>
      <div></div>
    </div>
  </div>
);

const lStyle = {
  flex: { display: "flex" },
  input: { marginLeft: 40 },
};

export default EmailBanner;
