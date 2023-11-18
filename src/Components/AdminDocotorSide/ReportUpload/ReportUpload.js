import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { getAllPatients } from "../../../services/PatientService";
import { getAllTests } from "../../../services/MedicalTestsCategoryService";
import "./ReportUpload.css";
import { useState } from "react";
import { getPatientById } from "../../../services/PatientService";
import { saveReports } from "../../../services/MedicleReports";
import { Alert, Button } from "react-bootstrap";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { Base64 } from "js-base64";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function ReportUpload() {
  const [patientList, setPatientList] = useState([]);
  const [patient, setPatient] = useState([]);
  const [report, setReports] = useState([]);
  const [testsList, setTestsList] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [file, setFile] = useState([]);
  const loadPatientList = () => {
    getAllPatients()
      .then((response) => {
        const data = response.data;
        setPatientList(data);
      })
      .catch((error) => {});
  };

  const loadMedicalTestsList = () => {
    getAllTests()
      .then((response) => {
        const data = response.data;

        setTestsList(data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadPatientList();
    loadMedicalTestsList();

    console.log(getAllTests());
  }, []);
  const submitForm = (event) => {
    console.log(report);
    event.preventDefault();
    saveReports(report)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
        console.log(report);
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const changesValues = (event) => {
    const { name, value } = event?.target;
    setReports({ ...report, [name]: value });
    getPatientById(value).then(({ data }) => {
    setPatient(data);
    });
  };

  const uploadImage = (element) => {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setReports({ ...report, file: reader.result.replace(/^[^,]*,/, "") , fileName : file.name});      
    };
    reader.readAsDataURL(file);
    
  };

  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Upload Reports</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form onSubmit={submitForm} class="form">
            <div className="raw">
              <div className="left">
                <div style={{display:'flex', width:'600px'}}>
                <div className="input-box">
                  <label>
                    Select patient ID <br></br>
                    <select
                      class="input-box-dd"
                      style={{ width: "200px" }}
                      onChange={changesValues}
                      name="patientId"
                    >
                      {patientList.map((patient) => (
                        <option value={patient.patientId}>{patient.patientId}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div style={{width:'400px',marginTop:'60px'}}>{patient?.patientName}</div>
                </div>
           
               
                <div class="input-box" style={{ width: "200px" }}>
                  <label>Date</label>
                  <input
                    type="date"
                    placeholder="Enter birth date"
                    name="date"
                    onChange={changesValues}
                    required
                  />
                </div>
                <div className="input-box">
                  <label>
                    Select Report Type <br></br>
                    <select
                      class="input-box-dd"
                      onChange={changesValues}
                      name="medicleTestType"
                    >
                      {testsList.map((tests) => (
                        <option>{tests.medicalTest}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div class="">
                  <br></br>
                  <label>Upload file</label>
                  <br></br>
                  {/* <input  onChange={changesValues} class="filechosen" type="file" id="myFile" name="filename" /> */}
                  {/* <input  onChange={changesValues} class="filechosen" type="text" id="myFile" name="fileName" /> */}
                  <div>
                    {report.file ? (
                      <div
                        onClick={() => {
                          let a = document.createElement("a");
                          a.href =
                            "data:application/octet-stream;base64," +
                            report.file;
                          a.download = "documentName.pdf";
                          a.click();
                        }}
                      >
                        <br/>
                        <i
                          class="fa-solid fa-file-medical fa-6x"
                          style={{ color: "rgb(171 213 243)" }}
                        ></i>{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <input
                    className=""
                    style={{ marginTop: "20px" }}
                    type="file"
                    name="fileName"
                    onChange={uploadImage}
                  />
                </div>
              </div>
            </div>

            <Button
              style={{ backgroundColor: "#2080c5" }}
              className="btnadding"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </section>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
