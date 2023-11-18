import axios from "axios";
import { baseURL } from "./urls";

export const saveHospital = (hospital) => {
    return axios.post(`${baseURL}/v1/hospital`, hospital);
  };

  export const  getAllHospitals = () =>{
    return axios.get(`${baseURL}/v1/hospital`);
  }