import axios from "axios";
import { baseURL } from "./urls";

export const saveMedicalTests = (medical_tests) => {
    return axios.post(`${baseURL}/v1/medical_tests`, medical_tests);
  };
  export const getAllTests = () => {
    return axios.get(`${baseURL}/v1/medical_tests`);
  };
  