import React, { useEffect } from "react";
import { useState } from "react";
import DoctorProfilePanel from '../DoctorProfilePanel/DoctorProfilePanel'
import './DoctorAppointment.css'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navbar from "../../ClientSide/Navbar/Navbar";
import {getDoctorAvalability} from "../../../services/AppointmentService";
import Moment from "react-moment";
import { getDoctorById } from "../../../services/DoctorService";
export default function DoctorAppointment() {

  
  const getDoctorAppointmentAvailability = (doctorId) => {
    getDoctorAvalability(id).then(({ data }) => {
      setAppointments(data);
     console.log(data)
    })
  }
 
  const loadDoctor = () => {
    getDoctorById(id).then(({ data }) => {
      setDoctor(data);
    });
  };
  useEffect(() => {
    loadDoctor();
    getDoctorAppointmentAvailability();
  }, []);

  const [doctor, setDoctor] = useState([]);
  const [appointments, setAppointments] = useState([]);
  let { id } = useParams();




  return (
    <div>
      <Navbar />
    <div> <DoctorProfilePanel />
   
    </div>
   
    <div className='doc_appointment_area'>
   
    
    {/* <div style={{display:'flex'}}><p style={{fontWeight:'bold'}}>Appointments </p>   <br></br>
    <div className='appointment_Quant'>2</div>
    </div> */}
   
  
     </div>
     <div class="panel">
              
              <div class="panel-body pn">
                <table class="table mbn tc-icon-1 tc-med-2 tc-bold-last">
             
                  <tbody>
                  <tr class="hidden" style={{borderColor:'#99bfea'}}>
                    <th>Date</th>
                    <th>Patient Name</th>
                      <th>Time</th>
                      <th>Location</th>
                    </tr >
                    {appointments.map((appointment) => (     
                    <tr style={{borderColor:'#99bfea'}}>
                      <td><Moment format="YYYY-MM-DD">{appointment?.date}</Moment></td>
                       <td>{appointment?.patientName}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.hospitalName}</td>
                    
                    </tr>
                   
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
     </div>
  )
}
