import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./DoctorLoginPanel.css";
import { MDBCardBody, MDBCol, MDBInput } from "mdb-react-ui-kit";
import {doctorLogin}  from "../../../services/DoctorService";
import {
  NotificationContainer,
  NotificationManager,
}from "react-notifications";
import Navbar from "../../ClientSide/Navbar/Navbar";


export default function DoctorLoginPanel() {
  const [error, setError] = useState(false);
  const [login, setLogin] = useState({});

  const navigate = useNavigate();


  const sendLoginRequest = (event) => {
    event.preventDefault();
 
    doctorLogin(login)
   
    .then(({data})=>{
      console.log(data)
      navigate(`/doctor_profile/${data.doctorId}`)
     
    })
    .catch(()=>{
      setError(true)
      NotificationManager.error("error message", " Invalid username or password");
    
    })
  

  };
  const changeValues = (event) => {
    const { target } = event;
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
    setError(false)
  };

  return (
    <div>    <Navbar />
     <div className="doctorlogin">
  
  <form onSubmit={sendLoginRequest}>
    <MDBCol md="4 mx-auto">
      <br></br>
      <br></br>
      <MDBCardBody className="d-flex flex-column">
        <p className="fs-4 fw-bold">Doctor</p>

        <br></br>
        <p className="">Username</p>
        <MDBInput
          wrapperClass="mb-4"
          label=""
          id="formControlLg"
          onChange={changeValues}
          type="username"
          name="username"
          size="lg"
          required
        />
        <p className=" "> Password</p>
        <MDBInput
          wrapperClass="mb-4"
          label=""
          id="formControlLg"
          onChange={changeValues}
          type="password"
          name="password"
          size="lg"
          required
        />
        <br></br>

        <Button
          style={{ backgroundColor: "#2080c5", border: "none" }}
          type="submit"
          variant="dark"
        >
          Login
        </Button>
      </MDBCardBody>
    </MDBCol>
  </form>
</div>
    
    </div>
   
  );
}
