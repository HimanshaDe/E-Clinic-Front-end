import axios from "axios";
import { baseURL } from "./urls";

export const saveAppointment = (appointment) => {
    return axios.post(`${baseURL}/v1/appointment/`, appointment);
  };
export const getAllAppointments = () =>{
return axios.get(`${baseURL}/v1/appointment`);
};

export const getDoctorAvalability = (doctorId) => {
 if(doctorId){
  return axios.get(`${baseURL}/v1/appointment/available-doctor-appointments/${doctorId}`);
 }
 else{
  return axios.get(`${baseURL}/v1/appointment`);
 }
 

 
};

export const getAppointmentsByPatientId = (patientId) =>{
  return axios.get(`${baseURL}/v1/appointment/available-patient-appointments/${patientId}`);
};