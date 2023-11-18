import axios from "axios";
import { baseURL } from "./urls";


export const saveDoctorSpeciality = (speciality) => {
    return axios.post(`${baseURL}/v1/doctor_speciality`, speciality);
  };