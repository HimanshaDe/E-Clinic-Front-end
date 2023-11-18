import axios from "axios";
import { baseURL } from "./urls";


export const saveCalender = (calender) => {
    return axios.post(`${baseURL}/v1/doctor_calender`, calender);
  };
