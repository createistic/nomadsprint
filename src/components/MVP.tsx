import React from "react";
import { Button } from "createistic-designsystem";
// import { useHistory } from "react-router-dom";
import axios from "axios";
// TODO: import SDKService

const getData = () =>
  new Promise(async (resolve, reject) => {
    try {
      const resp = await axios({
        method: "GET",
        url: "http://backend-dev2.eu-west-1.elasticbeanstalk.com/user-info",
      });
      resolve(resp);
    } catch (e) {
      reject(e);
    }
  });

const initiateAuth = async () => {
  // const history = useHistory();
  console.log("initiate clicked");
  const data = await getData();
  console.log(data);
};

const MVP = (): React.ReactElement => {
  return (
    <div>
      <h1>Browse Sprints</h1>
      <Button type="primary" text="Get verified" onClick={initiateAuth} />
    </div>
  );
};

export default MVP;
