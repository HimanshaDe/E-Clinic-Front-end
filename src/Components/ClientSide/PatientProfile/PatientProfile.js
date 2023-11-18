
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./PatientProfile.css";
import { getPatientById } from "../../../services/PatientService";
export default function PatientProfile() {


 
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
    <div>
     

     
        <div class="page-heading">
          
          <div class="media clearfix">
           
            <div class="media-body va-m">
              
              <h2 class="media-heading">
              {patient?.patientName}
                <small> - Profile</small>
              </h2>
              <p class="lead">
             #Patient ID : {patient?.patientId}
              </p>
            </div>
          </div>
        </div>

      
    
    </div>
  );
}
