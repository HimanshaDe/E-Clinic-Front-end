import React from "react";
import SideBar from "../SideBar/SideBar";
import "./AppointmentPanel.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {getAllAppointments} from "../../../services/AppointmentService";
import {getDoctorAvalability} from "../../../services/AppointmentService";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import Moment from "react-moment";
import { useEffect } from "react";
import {
  getAllDoctors} from "../../../services/DoctorService";
export default function AppointmentPanel() {
  const [doctorList, setDoctorList] = useState([]);
const [appointments, setAppointments] = useState([]);
const [doctorAvailability, setDAvailability] = useState([]);
// const loadAppointmentList = () =>{
//   getAllAppointments()
//   .then((response) =>{
//     const data= response.data;
//     console.log(data)
//     setAppointments(data);
//   })
//   .catch((error) => {});
// }
const loadDoctorList = () => {
  getAllDoctors()
    .then((response) => {
      const data = response.data;
      setDoctorList(data);
   
    })
    .catch((error) => {});
};

const onChangeDoctor = (event) => {
  const { value } = event.target;
  
  getDoctorAppointmentAvailability(value);
  
};

const getDoctorAppointmentAvailability = (doctorId) => {
  console.log("dddddddddddddd", doctorId)
  getDoctorAvalability(doctorId).then(({data}) => {
    setDAvailability(data)
   
  })
}

useEffect(()=>{
  // loadAppointmentList()
  loadDoctorList()
  getDoctorAppointmentAvailability()
}, []);




  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Appointments</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <div class="form">
            <div className="formelements">
              <label for="lang" style={{fontWeight:'bold'}}>Select Doctor </label>
             <div style={{display:'flex'}}>
               
             
              <div class=""  style={{ width: "200px" }}>
              <div class="column">
                <div class="select-box">
                  <select name="speciality"   onChange={onChangeDoctor}>
                    <option hidden>Select Doctor</option>
                    {doctorList.map((doctor) => (  <option value={doctor?.doctorId}>{doctor?.doctorName}</option> ))}
                    
                  </select>
                </div>
              </div>
            </div>

             </div>
             
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <MDBTable bordered>
          <MDBTableHead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Doctor</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Date</th>
              <th scope="col"> Time</th>
             <th>Place</th>
            </tr>
          </MDBTableHead>
          {/* {appointments.map((appointments) => ( */}
          {doctorAvailability.map((appointments) => (
          <MDBTableBody>
            <tr>
           
              <th scope="row">{appointments.appointmentId}</th>
              <td>{appointments.doctorName}</td>
              <td>{appointments.patientName}</td>
               <td> <Moment format="YYYY-MM-DD">{appointments.date}</Moment></td>
              <td>{appointments.time}</td>
              <td>{appointments.hospitalName}</td>    
                
            </tr>

           
          </MDBTableBody>  ))}      
         
        </MDBTable>
      </div>
    </div>
  );
}
