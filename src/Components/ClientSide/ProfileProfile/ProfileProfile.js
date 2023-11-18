import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PatientProfile from "../PatientProfile/PatientProfile";
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPatientById } from "../../../services/PatientService";
import Moment from "react-moment";
export default function ProfileProfile() {
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
      <Navbar />

      <section id="content" class="container" style={{ width: "100%" }}>
        <PatientProfile />
        <div class="row" style={{ display: "flex", marginLeft: "30px" }}>
          <ProfileLeftBar />

          <div class="col-md-8" style={{ marginLeft: "50px" }}>
            <div class="panel">
              <div class="panel-heading" style={{ background: " #e9f1fa" }}>
                <span class="panel-icon">
                  {/* <i class="fa fa-star"></i> */}
                </span>
                <span
                  class="panel-title"
                  style={{ fontWeight: "bold", paddingLeft: "15px" }}
                >
                  {" "}
                  Profile
                </span>
              </div>
              <div class="panel-body pn">
                <table class="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                  <thead>
                    <tr class="hidden" style={{ borderColor: "#99bfea" }}>
                      <th>Patient ID</th>
                      <td>{patient?.patientId}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>Full Name</th>
                      <td>{patient?.patientName}</td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>Gender</th>
                      <td>{patient?.gender}</td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>Birth Day</th>

                      <td>
                        <Moment format="MMMM Do, YYYY">
                          {patient?.birthDate}
                        </Moment>
                      </td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>NIC</th>
                      <td>{patient?.nic}</td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>Contact No</th>
                      <td>{patient?.contact}</td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>email</th>
                      <td>{patient?.email}</td>
                    </tr>
                    <tr style={{ borderColor: "#99bfea" }}>
                      <th>Date of Join</th>
                      <td>
                        <Moment format="MMMM Do, YYYY">
                        {patient?.doj}
                         </Moment>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
