import React, { useEffect } from "react";
import DoctorProfilePanel from "../DoctorProfilePanel/DoctorProfilePanel";
import "./DoctorReportView.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorById } from "../../../services/DoctorService";
import { getPatientById } from "../../../services/PatientService";
import { getAllPatients } from "../../../services/PatientService";
import { getAllReports } from "../../../services/MedicleReports";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import Moment from "react-moment";
import Navbar from "../../ClientSide/Navbar/Navbar";
export default function DoctorReportView() {
  const [patientList, setPatientList] = useState([]);
  const [patient, setPatient] = useState([]);
  const [reportList, setreportList] = useState([]);
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(null);

  function calculateAge() {
    const now = new Date();
    const birthdate = new Date(patient?.birthDate);
    console.log(patient?.birthDate);
    const diff = now.getTime() - birthdate.getTime();
    const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  }

  useEffect(() => {
    calculateAge();
    loadReportList();
  }, [patient]);

  const onChangePatient = (event) => {
    const { value } = event.target;

    getPatientById(value).then(({ data }) => {
      setPatient(data);
    });
  };

  const loadReportList = () => {
    console.log("report")

    
    getAllReports(patient?.patientId)
      .then((response) => {
       
        const data = response.data;
        setreportList(data);
      })
      .catch((error) => {});
  };

  const loadPatientList = () => {
    getAllPatients()
      .then((response) => {
        const data = response.data;
        setPatientList(data);
      })
      .catch((error) => {});
  };
  const loadPatient = () => {
    getPatientById(id).then(({ data }) => {});
  };

  // const loadDoctor = () => {
  //   getDoctorById(id).then(({ data }) => {
  //     setDoctor(data);
  //   });
  // };
  useEffect(() => {
    // loadDoctor();
    loadPatientList();
    loadPatient();
    
    setBirthday("");
  }, []);

  const [doctor, setDoctor] = useState([]);
  let { id } = useParams();

  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <DoctorProfilePanel />
      </div>
      <div className="find_doctor_area">
        <div style={{ display: "flex" }}>
          <div>
            <p style={{ fontWeight: "bold" }}>Select Patient ID</p>{" "}
            <select
              id="search-dropdown"
              className="dropdowndid"
              name="doctorid"
              onChange={onChangePatient}
            >
              {patientList.map((patients) => (
                <option value={patients.patientId}>{patients.patientId}</option>
              ))}
            </select>
          </div>
          <div className="right">
            <div class="panel">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{patient?.patientName}</td>
                  </tr>

                  <tr>
                    <th>Birthday</th>
                    <td
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    >
                      {" "}
                      <Moment format="YYYY-MM-DD">{patient?.birthDate}</Moment>
                    </td>

                    <p> age : {age}.</p>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <p className="m_reports"> previous medical reports</p>

              <MDBTable style={{ borderColor: "#99bfea", width: "1000px" }}>
                <MDBTableHead>
                  <tr>
                    <th scope="col">Test Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reports</th>

                    <th></th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody>
                  {reportList.map((report) => (
                    <tr>
                      <td> {report.medicleTestType}</td>
                      <td>
                        {" "}
                        <Moment format="YYYY-MM-DD">{report.date}</Moment>
                      </td>
                      <td>
                        {" "}
                        {report.file ? (
                          <div
                            style={{}}
                            onClick={() => {
                              let a = document.createElement("a");
                              a.href =
                                "data:application/octet-stream;base64," +
                                report.file;
                              a.download = "documentName.docx";
                              a.click();
                            }}
                          >
                            <i
                              class="fa-solid fa-file-medical fa-6x"
                              style={{ color: "rgb(171 213 243)" }}
                            ></i>
                          </div>
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
