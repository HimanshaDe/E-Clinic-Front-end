import axios from "axios";
import { baseURL } from "./urls";

export const login = (login) => {
  return axios.post(`${baseURL}/v1/login/admin`, login);
};
