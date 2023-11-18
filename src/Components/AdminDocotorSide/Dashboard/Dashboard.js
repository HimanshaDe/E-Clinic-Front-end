import React from "react";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import SideBar from "../SideBar/SideBar";
import Doctor from "./doctors.jpg";
import Partients from "./patients.jpg";
import Articles from "./article.jpg";
import Appointments from "./appointment.jpg";
import Reportupload from "./reportupload.jpg";
import Hospital from "./hospital.jpg";
import { getCount } from "../../../services/HomeService";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="admindashboard">
      <div className="leftsidebar">
        <SideBar />
      </div>
      <div className="rightsidearea">
      <div className="topofdashboard"></div>
          <div className="dashboardtxt">
            <h1> Dashboard</h1>
          </div>
        <div className="dashboardArea">
         
          <div className="dcards">
            {" "}
            <Link to="/doctors" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Doctor} alt="..." position="top" />
                <MDBCardBody>
                  <Card.Title>Doctors</Card.Title>
                </MDBCardBody>
              </MDBCard>{" "}
            </Link>
          </div>
          <div className="dcards">
            <Link to="/patients" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Partients} alt="..." position="top" />
                <MDBCardBody>
                  <Card.Title>Patients</Card.Title>
                </MDBCardBody>
              </MDBCard>{" "}
            </Link>
          </div>
          <div className="dcards">
            <Link to="/articles" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Articles} alt="..." position="top" />
                <MDBCardBody>
                  <Card.Title>Articles</Card.Title>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </div>
          <div className="dcards">
            <Link to="/schedule_calender" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Appointments} alt="..." position="top" />
                <MDBCardBody>
                  <Card.Title>Schedule calender</Card.Title>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </div>
          <div className="dcards">
            <Link to="/upload_reports" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Reportupload} alt="..." position="top" style={{height:"240px"}}/>
                <MDBCardBody>
                  <Card.Title>Upload Reports</Card.Title>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </div>
          <div className="dcards">
            <Link to="/hospitals_list" className="cardlink">
              {" "}
              <MDBCard className="dashboardcard">
                <MDBCardImage src={Hospital} alt="..." position="top" />
                <MDBCardBody>
                  <Card.Title>Add Hospitals</Card.Title>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
