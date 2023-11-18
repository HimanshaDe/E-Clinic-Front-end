
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar"
import PatientProfile from "../PatientProfile/PatientProfile"
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar"
import { getPatientById } from "../../../services/PatientService";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import {getAppointmentsByPatientId} from "../../../services/AppointmentService";
import Moment from "react-moment";



export default function ProfileHistory() {

  const [appointments, setAppointments] = useState([]);

  const getPatientAppointmentAvailability = (patientId) => {
    getAppointmentsByPatientId(id).then(({ data }) => {
      setAppointments(data);
     console.log(data)
    })
  }





  const loadPatient = () => {
    getPatientById(id).then(({ data }) => {
      setPatient(data);
    });
  };
  useEffect(() => {
    loadPatient();
    getPatientAppointmentAvailability();
  }, []);

  const changeStatus = (event) => {
    setPatient({ ...patient, activeStatus: event?.target?.checked });
  };
  const [patient, setPatient] = useState([]);
  let { id } = useParams();





  return (
    <div>
         <Navbar />

<section id="content" class="container" style={{ width: "100%" }}>
  <PatientProfile />
  <div class="row" style={{ display: "flex", marginLeft: "30px" }}>
   
    <ProfileLeftBar />
   
    <div class="col-md-8"  style={{marginLeft:'50px'}}>
        <div class="panel">
              <div class="panel-heading">
                <span class="panel-icon">
                
                </span>
                <span class="panel-title" style={{fontWeight:'bold', paddingLeft:'15px'}}> Appointment History</span>
              </div>
              <div class="panel-body pn">
              <MDBTable style={{borderColor:'#99bfea'}}>
      <MDBTableHead>
      <tr>
         
          <th scope='col'>Date</th>
          <th scope='col'>Doctor</th>
          <th scope='col'>Location</th> 
          <th scope='col'>Time</th> 
        </tr>
      </MDBTableHead>

      <MDBTableBody>
      {appointments.map((appointment) => (     
        <tr> 
          <td scope='col'><Moment format="YYYY-MM-DD">{appointment.date}</Moment></td>
          <td scope='col'>{appointment.doctorName}</td>
          <td scope='col'>{appointment.hospitalName}</td> 
          <td scope='col'>{appointment.time}</td> 
           </tr>
         ))}
       
      </MDBTableBody>
    
    </MDBTable>
              </div>
            </div>
        </div>

  </div>
</section>
    </div>
  )
}
