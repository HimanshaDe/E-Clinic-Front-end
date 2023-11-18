import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPatientById } from "../../../services/PatientService";


export default function ProfileLeftBar() {
  
  const loadPatient = () => {
    getPatientById(id).then(({ data }) => {
      setPatient(data);
    });
  };
  useEffect(() => {
    loadPatient();
  }, []);

  const changeStatus = (event) => {
    setPatient({ ...patient, activeStatus: event?.target?.checked });
  };
  const [patient, setPatient] = useState([]);
  let { id } = useParams();


  return (
    <div class="col-md-4">
      <Link style={{ textDecoration: "none" }} to={`/patient_profile/${id}`}>
        {" "}
        <div class="panel">
          <div class="panel-heading">
            <span class="panel-icon">
              {/* <i class="fa fa-trophy"></i> */}
            </span>
            <span class="panel-title"> Profile</span>
          </div>
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to= {`/patient_Appointment_History/${id}`}
      >
       
        {" "}
        <div class="panel">
          <div class="panel-heading">
            <span class="panel-icon">
             
            </span>
            <span class="panel-title">Appointment History</span>
          </div>
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/patient_reports/${id}`}
      > 
        {" "}
        <div class="panel">
          <div class="panel-heading">
            <span class="panel-icon">
           
            </span>
            <span class="panel-title">Medical Reports</span>
          </div>
        </div>{" "}
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/book_an_appointment/${id}`}
      >
        {" "}
        <div class="panel">
          <div class="panel-heading">
            <span class="panel-icon">
             
            </span>
            <span class="panel-title">Appointments</span>
          </div>
        </div>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/patient_login`}
      >
        {" "}
        <div class="panel">
          <div class="panel-heading">
            <span class="panel-icon">
             
            </span>
            <span class="panel-title">Logout</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
