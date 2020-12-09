import React from "react";
import Banner from "./Banner";
import EmailBanner from "./EmailBanner";

const About: React.FC = (): React.ReactElement => {
  return (
    <div className="Notes">
      <h1 className="H1Banner">About</h1>
      <div className="App-content" style={{ marginBottom: 100 }}>
        <p>
          Nomad Sprint is currently being developed as part of the Santander Digital Trust
          Hackathon.
        </p>
        <p>Leave your email, to receive updates about this product.</p>
        <p>We are excited to be bringing these unique work experience opportunities.</p>
      </div>
      <EmailBanner />
      <Banner />
    </div>
  );
};

export default About;
