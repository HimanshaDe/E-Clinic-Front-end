
import React, { useEffect } from "react";

import LogoTop from "../../Common/LogoTop/LogoTop";
import "./DoctorProfilePanel.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getDoctorById } from "../../../services/DoctorService";
import { MdCloudUpload, MdDelete } from "react-icons/md";
export default function DoctorProfilePanel() {


  
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

  const uploadImage = (element) => {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setDoctor({ ...doctor, imageName: reader.result });
    };
    reader.readAsDataURL(file);
  };
  const [doctor, setDoctor] = useState([]);
  let { id } = useParams();
  return (
    <div className="">
   
      <div class="page-heading" >
        <div class="media clearfix" style={{display:'flex'}}>
        <MDBCard >
      {/* <MDBCardImage src='' position='top' alt='...' /> */}
      <div
                  className=""
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {doctor.imageName ? (
                    <img src={doctor.imageName} alt="No image found" />
                  ) : (
                    <MdCloudUpload
                      color="#1475cf"
                      style={{ width: "40px", margin: "auto" }}
                    />
                  )}
                </div>
    </MDBCard>
          <div class="media-body va-m " style={{paddingLeft:"50px"}} >
            <h2 class="media-heading">Dr. 
            {doctor?.doctorName}
              <small> - Profile</small>
            </h2>
            <p class="lead">{doctor?.speciality}</p>
          </div>
        </div>
      </div>

     

      <div className="doctor_nav" style={{display:'flex'}}>

      <div>
      <Link to={`/doctor_profile/${id}`}> <Button variant="primary" className="doc_buttons">Profile</Button></Link>
       
       
       <Link to={`/doc_appointment_view/${id}`}>
        <Button variant="primary" className="doc_buttons">Appointments</Button>
     </Link>
     
     <Link to={`/patient_medical_report/${id}`}>
        <Button variant="primary" className="doc_buttons">Patient's reports</Button>
     </Link>
     <Link to='/admin_and_doctor'>
        <Button variant="primary" className="doc_buttons">Logout</Button>
     </Link>
        </div>
     
      </div>
    </div>
  );
}
