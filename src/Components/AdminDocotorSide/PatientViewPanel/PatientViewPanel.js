import React, { useEffect,useState } from "react";
import SideBar from "../SideBar/SideBar"
import './PatientViewPanel.css'
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getAllPatients } from "../../../services/PatientService";


import { Link } from "react-router-dom";
export default function PatientViewPanel() {
  const [patientList, setpatientList] = useState([]);

  const loadPatientList = () => {
    getAllPatients()
      .then((response) => {
        const data = response.data;
        setpatientList(data);
      })
      .catch((error) => {});
  };


  useEffect(() => {
    loadPatientList();
    console.log(patientList.length)
  }, []);




  return (
    <div className="admindashboard">
    <div className="leftsidesidebar">
      <SideBar />
    </div>

    <div className="dashboardBody">
      <h1>Patients</h1>
      <br></br>
      <hr></hr>
      <br></br>
     <br></br>

      <MDBTable bordered>
      <MDBTableHead>
      <tr>
          <th scope='col'>PatientId</th>
          <th scope='col'>Name</th>
          <th scope='col'>NIC</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Address</th>
          <th scope='col'>Contact</th>
         
        </tr>
      </MDBTableHead> 
      {patientList.map((patient) => (
      
      <MDBTableBody>
        <tr>
          <th scope='row'>{patient.patientId}</th>
          <td>{patient.patientName}</td>
          <td>{patient.nic}</td>
          <td>{patient.gender}</td>
          <td>{patient.address}</td>
          <td>{patient.contact}</td>
            </tr>
       
       
      </MDBTableBody>
         ))}
   
    </MDBTable>
    </div>
  </div>
  )
}
