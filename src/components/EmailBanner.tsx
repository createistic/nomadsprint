import { Button } from "createistic-designsystem";
import React from "react";

const EmailBanner = (): React.ReactElement => (
  <div className="EmailBanner">
    <div>
      <h4>Stay up to date with progress by submitting your email address</h4>
    </div>
    <div>
      <input type="text" placeholder="email address" />
    </div>
  </div>
);

export default EmailBanner;
