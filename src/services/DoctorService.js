import axios from "axios";
import { baseURL } from "./urls";

export const saveDoctor = (doctor) => {
  return axios.post(`${baseURL}/v1/doctor/doctor_save`, doctor);
};

export const getAllDoctors = () => {
  return axios.get(`${baseURL}/v1/doctor/get-all-Doctors`);
};

export const getDoctorById = (id) => {
  return axios.get(`${baseURL}/v1/doctor/get-by-id/${id}`);
};

export const updateDoctor = (doctorUp) =>{
  return axios.put(`${baseURL}/v1/doctor/doctor_update`, doctorUp);
}

export const doctorLogin = (login) => {
  return axios.post(`${baseURL}/v1/login/doctor`, login);
};


export const getDoctorsBySymptomsText = (text)=>{
  return axios.post(`${baseURL}/v1/disease/auto-detect`, {
    text: text
  });
}