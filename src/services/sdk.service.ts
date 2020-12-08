import axios from "axios";
import { User } from "./utils";
const baseUri = "https://apiv2.nomadsprint.com";
// const baseUri = "http://localhost:8000";

interface IApiLinkResponse {
  data: string;
}

interface IUserResponse {
  data: User;
}

const postToken = (code: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axios({
        method: "POST",
        url: `${baseUri}/token`,
        data: { code },
      });
      console.log("POST res:", resp);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

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
  postToken,
};

export default SDKService;
