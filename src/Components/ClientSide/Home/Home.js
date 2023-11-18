import { MdBorderBottom } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import Background from "./231.jpg";
import lefttop from "./lefttop.jpg";
import leftbottom from "./leftbottom.jpg";
import right from "./right.jpg";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { getCount } from "../../../services/HomeService";
import React, { useEffect } from "react";
import { useState } from "react";
export default function Home() {


  return (
    <div>
      <Navbar />
      <img src={Background} style={{ width: "100%" }}></img>
      <br></br>
      <br></br>
      <h1 className="topics" style={{ marginLeft: "50px" }}></h1>
      <div className="home_desc_area">
        <div className="lefts">
          <div className="leftleft">
            <div className="lltop">
              <img
                src={lefttop}
                style={{
                  width: "100%",
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              ></img>
            </div>
            <div className="llbottom">
              <img
                src={leftbottom}
                style={{
                  width: "100%",
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              ></img>
            </div>
          </div>
          <div className="leftright">
            <img
              src={right}
              style={{
                width: "100%",
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            ></img>
          </div>
        </div>
        <div className="rights">
          You feel better when you know you have a good doctor to take care of
          your health.<br></br>
          We are ready to stand up for your healthy. Go to the link below and
          select the right doctor for you and book an appointment
          <br></br>
          <br></br>
          <Link to="/patient_login">
            <Button style={{ backgroundColor: "#2080c5", fontSize: "18px" }}>
              Make an Appointment here
            </Button>
          </Link>
        </div>
      </div>
    
      <br></br>
      <Footer />
    </div>
  );
}
