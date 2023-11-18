import React, { useEffect } from "react";
import DoctorProfilePanel from '../DoctorProfilePanel/DoctorProfilePanel'
import './DoctorProfile.css'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getDoctorById } from "../../../services/DoctorService";
import Moment from 'react-moment';
import Navbar from "../../ClientSide/Navbar/Navbar";
import { Nav } from "react-bootstrap";
export default function DoctorProfile() {


  
  const loadDoctor = () => {
    getDoctorById(id).then(({ data }) => {
      setDoctor(data);
    });
  };
  useEffect(() => {
    loadDoctor();
  }, []);

  const changeStatus = (event) => {
    setDoctor({ ...doctor, activeStatus: event?.target?.checked });
  };
  const [doctor, setDoctor] = useState([]);
  let { id } = useParams();


  return (
    <div>
      <Navbar />
       <div> <DoctorProfilePanel /></div>
       
        <div className='doctor_profile'>
            <div class="panel">
              <div class="panel-heading" style={{background:' #e9f1fa'}}>
                <span class="panel-icon">
                  {/* <i class="fa fa-star"></i> */}
                </span>
                <span class="panel-title" style={{fontWeight:'bold', paddingLeft:'15px'}}> Profile</span>
              </div>
              <div class="panel-body pn">
                <table class="table mbn tc-icon-1 tc-med-2 tc-bold-last">
             
                  <tbody>
                  <tr class="hidden" style={{borderColor:'#99bfea'}}>
                      <th>Doctor ID</th>
                      <td>{doctor?.doctorId}</td>
                    </tr >
                    
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>Full Name</th>
                      <td>{doctor?.doctorName}</td>
                    </tr>
                    <tr  style={{borderColor:'#99bfea'}}>
                      <th>Speciality</th>
                      <td>{doctor?.speciality}</td>
                    </tr >
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>Gender</th>
                      <td>{doctor?.gender}</td>
                    </tr>
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>Birth Day</th>
                      <td>
                        
                      <Moment format="MMMM Do, YYYY">
                      {doctor?.birthDate}
            </Moment>
                       </td>
                    </tr>
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>NIC</th>
                      <td>{doctor?.nic}</td>
                    </tr>
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>Contact No</th>
                      <td>{doctor?.contact}</td>
                    </tr>
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>email</th>
                      <td>{doctor?.email}</td>
                    </tr>
                    <tr style={{borderColor:'#99bfea'}}>
                      <th>Date of Join</th>
                      <td>
                      <Moment format="MMMM Do, YYYY">
                      {doctor?.doj}
            </Moment>
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  )
}
