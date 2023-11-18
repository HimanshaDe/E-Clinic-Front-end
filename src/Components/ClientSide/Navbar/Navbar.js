import React, { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navbar.css";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
 
} from "react-bootstrap";

import LogoTop from "../../Common/LogoTop/LogoTop";





export default function Home() {
  

  return (
    <div>
      <div className="pagetop">
       <LogoTop />
      </div>
      <div className="clientsidenavbar"><div className="row">
        <div className="col-md-12">
          <Navbar
            style={{
              backgroundColor: "white",
              height: "60px",
              boxShadow:
                "rgb(9 106 213 / 40%) 0px 0px 0px 2px, rgb(241 241 241 / 65%) 0px 4px 6px -1px, rgb(255 255 255 / 8%) 0px 1px 0px inset",
            }}
            expand="lg"
            sticky="top"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link to>
                  {" "}
                  <Link className="navbarlink" to="/">
                    {" "}
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navbarlink" to="/about_us">
                    {" "}
                    About us
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navbarlink" to="/medical_articles">
                    {" "}
                    Articles
                  </Link>
                </Nav.Link>
              
                <Nav.Link>
                  {" "}
                  <Link className="navbarlink" to="/doctors_list">
                    {" "}
                    Doctors{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navbarlink" to="/patient_login">
                    {" "}
                    Make an appointment{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link className="navbarlink" to="/admin_and_doctor">
                    {" "}
                    Login{" "}
                  </Link>
                </Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
         
        </div>
      </div></div>

      
    </div>
  );
}
