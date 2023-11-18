import axios from "axios";
import { baseURL } from "./urls";


export const getCount = () => {
    return axios.get(`${baseURL}/v1/home`);
  };
  