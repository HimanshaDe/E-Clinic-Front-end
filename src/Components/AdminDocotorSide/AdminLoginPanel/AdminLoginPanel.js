import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./AdminLoginPanel.css";
import Navbar from "../../ClientSide/Navbar/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
import * as adminService from "../../../services/AdminService";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
}from "react-notifications";

export default function AdminLoginPanel() {
  const [error, setError] = useState(false);
  const [login, setLogin] = useState({});
  

  const navigate = useNavigate();

  const changeValues = (event) => {
    const { target } = event;
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
    setError(false)
  };

  const sendLoginRequest = (event) => {
    event.preventDefault();
    adminService
      .login(login)
      .then(() => {
        navigate("/adminDashboard");
      })
      .catch(() => {
        setError(true)
        NotificationManager.error("error message", " Invalid username or password");
      });
  };

  return (
    <div>
      <Navbar />
      <br></br>
      <section class="container1">
        <form onSubmit={sendLoginRequest}>
          <MDBCol md=" mx-auto" className="adminlogin">
            <br></br>
            <br></br>
            <MDBCardBody className="d-flex flex-column">
              <p className="fs-4 fw-bold">Admin</p>

              <br></br>
              <p className="">Username</p>
              <MDBInput
                wrapperClass="mb-4"
                label=""
                id="username"
                // ref={useRef}
                type="text"
                size="lg"
                onChange={changeValues}
                autoComplete="off"
                required
                name="username"
              />
              <p className=" "> Password</p>
              <MDBInput
                wrapperClass="mb-4"
                label=""
                id="formControlLg"
                onChange={changeValues}
                type="password"
                size="lg"
                name="password"
                required
              />
              <br></br>

              <Button
                type="submit"
                style={{ backgroundColor: "#2080c5", border: "none" }}
                variant="dark"
              >
                Login
              </Button>
{/* 
{error && <div className="loginerror">Login Failed</div>} */}

            </MDBCardBody>
          </MDBCol>
        </form>
      </section>
    </div>
  );
}
