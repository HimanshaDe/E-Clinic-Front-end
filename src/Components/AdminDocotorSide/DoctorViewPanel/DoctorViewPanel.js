import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./DoctorViewPanel.css";
import Button from "react-bootstrap/Button";
import { getAllDoctors } from "../../../services/DoctorService";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function DoctorViewPanel() {
  const [doctorList, setDoctorList] = useState([]);

  const loadDoctorList = () => {
    getAllDoctors()
      .then((response) => {
        const data = response.data;
        setDoctorList(data);
      })
      .catch((error) => {});
  };
 

  useEffect(() => {
    loadDoctorList();
  }, []);

  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>
      <div className="dashboardBody">
        <h1>Doctors</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <Link to="/add_doctor">
          <Button
            style={{ backgroundColor: "#2080c5" }}
            className="btnadding"
            variant="primary"
          >
            Add Doctor
          </Button>
        </Link>
        <br></br>
        <br></br>
        <br></br>

        <MDBTable bordered>
          <MDBTableHead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Speciality</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
            </tr>
          </MDBTableHead>

          {doctorList.map((doctor) => (
            <MDBTableBody>
              <tr>
                <th scope="row">{doctor.doctorId}</th>
                <td style={{textAlign:'center'}}>
                <div 
                 
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {doctor.imageName
               ? (
                    <img src={doctor.imageName} style={{width:'70px'}} alt="No image found" />
                  ) : (
                    <MdCloudUpload
                      color="#1475cf"
                      style={{ width: "40px", margin: "auto" }}
                    />
                  )}
                </div>  
                  
                  
                  
                  </td>
                <td>Dr {doctor.doctorName}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.contact}</td>
                <td>
                  <Link to={`/edit_doctors/${doctor.doctorId}`}>
                    <Button
                    onClick={""}
                      style={{ backgroundColor: "#2080c5" }}
                      className="editbtn"
                      variant="primary"
                      
                    >
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}

        
        </MDBTable>
      </div>
    </div>
  );
}
