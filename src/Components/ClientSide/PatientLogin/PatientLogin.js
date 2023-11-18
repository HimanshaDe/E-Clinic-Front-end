import React from "react";
import { useRef, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import {  useNavigate } from "react-router-dom";
import "./PatientLogin.css";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { patientsLogin } from "../../../services/PatientService";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function PatientLogin() {

  const [error, setError] = useState(false);
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const sendLoginRequest = (event) => {
    event.preventDefault();
 console.log(login)
    patientsLogin(login)
   
    .then(({data})=>{
      console.log(data)
      navigate(`/patient_profile/${data.patientId}`)
     
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
    <div>
      <Navbar />

      <div className="patient_login_area">
        <h1 className="topic_login">Login</h1>

        <form onSubmit={sendLoginRequest}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            onChange={changeValues}
            name="username"
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={changeValues}
            name="password"
            required
          />

          {/* <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
          </div> */}

          <Button
            type="submit"
            style={{
              backgroundColor: "#2080c5",
              width: "100%",
              height: "40px",
            }}
            className="btnadding"
            variant="primary"
          >
            Login
          </Button>
          <br />
          <div
            className="registerhere"
            style={{ display: "flex", margin: "auto" }}
          >
            Don't have an Account{" "}
            <Link to="/patient_registration">
              <p
                style={{
                  paddingLeft: "20px",
                  float: "right",
                  color: "rgb(32, 128, 197)",
                }}
              >
                {" "}
                Register here
              </p>
            </Link>
          </div>
        </MDBContainer>
        </form>
      </div>
    </div>
  );
}
