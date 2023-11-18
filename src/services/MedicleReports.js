import axios from "axios";
import { baseURL } from "./urls";

  
export const saveReports = (report) => {
    return axios.post(`${baseURL}/v1/medical_reports`, report);
  };

  export const getAllReports = (patientId) =>{
    return axios.get(`${baseURL}/v1/medical_reports/${patientId}`);
  };