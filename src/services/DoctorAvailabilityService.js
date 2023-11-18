import axios from "axios";
import { baseURL } from "./urls";


export const getDoctorAvalability = (id) => {
    return axios.get(`${baseURL}/v1/doctor_calender/available-appointments/${id}`);
  };