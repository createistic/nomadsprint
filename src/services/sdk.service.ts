import axios from "axios";
const baseUri = "http://backend-dev2.eu-west-1.elasticbeanstalk.com";

interface IApiLinkResponse {
  data: string;
}

interface IUser {
  title?: string;
  email?: string;
}

interface IUserResponse {
  data: IUser;
}

const getVerificationLink = (): Promise<IApiLinkResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `${baseUri}/initiate-authorize`,
      });
      resolve(resp);
    } catch (e) {
      reject(e);
    }
  });
};

const getUserInfo = (): Promise<IUserResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `${baseUri}/user-info`,
      });
      resolve(resp);
    } catch (e) {
      reject(e);
    }
  });
};

const SDKService = {
  getVerificationLink,
  getUserInfo,
};

export default SDKService;
