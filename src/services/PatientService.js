import axios from "axios";
import { baseURL } from "./urls";

  
export const savePatient = (patient) => {
    return axios.post(`${baseURL}/v1/patient`, patient);
  };
  export const getAllPatients = () => {
    return axios.get(`${baseURL}/v1/patient/get-all-patients`);
  };
  export const patientsLogin = (login) => {
    return axios.post(`${baseURL}/v1/login/patient`, login);
  };
  export const getPatientById = (id) => {
    return axios.get(`${baseURL}/v1/patient/get-by-id/${id}`);
  };
  