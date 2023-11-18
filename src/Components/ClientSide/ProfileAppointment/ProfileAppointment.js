import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PatientProfile from "../PatientProfile/PatientProfile";
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar";
import { Button, Modal } from "react-bootstrap";
import "./ProfileAppointment.css";
import { getPatientById } from "../../../services/PatientService";
import {
  getAllDoctors,
  getDoctorsBySymptomsText,
} from "../../../services/DoctorService";
import { getDoctorAvalability } from "../../../services/DoctorAvailabilityService";
import Moment from "react-moment";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { saveAppointment } from "../../../services/AppointmentService";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import TextArea from "antd/es/input/TextArea";

const Swal = require("sweetalert2");

export default function ProfileAppointment() {
  const [doctorList, setDoctorList] = useState([]);
  const [doctorAvailability, setDAvailability] = useState([]);
  const [appointmentbtn, setappointmentbtn] = useState();
  const [selectedSchedule, setselectedSchedule] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [symptomsText, setSymptomsText] = useState("");
  const [doctorDetected, setDoctorDetected] = useState(null);
  const [noDoctorDetected, setnoDoctorDetected] = useState("");

  const loadDoctorList = () => {
    getAllDoctors()
      .then((response) => {
        const data = response.data;
        setDoctorList(data);
      })
      .catch((error) => {});
  };

  const loadPatient = () => {
    getPatientById(id).then(({ data }) => {
      setPatient(data);
    });
  };
  useEffect(() => {
    loadPatient();
    loadDoctorList();
  }, []);

  // const changeStatus = (event) => {
  //   setPatient({ ...patient, activeStatus: event?.target?.checked });
  // };
  const [patient, setPatient] = useState([]);
  const [appointment, setAppointment] = useState([]);
  let { id } = useParams();

  const onChangeDoctor = (event) => {
    const { value } = event.target;
    console.log(value);
    getdoctorAvailability(value);
  };

  const getdoctorAvailability = (doctorId) => {
    getDoctorAvalability(doctorId).then(({ data }) => {
      setDAvailability(data);
    });
  };

  const changeValues = (event) => {
    const { name, value } = event?.target;
    setAppointment({ ...appointment, [name]: value });
    console.log(appointment);
  };

  const makeAppointment = (availability) => {
    setselectedSchedule(availability);
    const moment = require("moment");

    console.log(moment(availability.date).format("MM/DD/YYYY"));

    console.log(availability);

    if (availability.appointmentCount == availability.number_of_patients) {
      console.log("matched");
    } else {
      var nextAppointmentTime = moment(availability.time, "HH:mm")
        .add(30 * availability.appointmentCount, "minutes")
        .format("HH:mm");

      Swal.fire({
        title: "Appointment Cofirmation?",
        text: " ",
        html: `<p>Date : ${moment(availability.date).format(
          "MM/DD/YYYY"
        )}  </p>  <p>Time : ${nextAppointmentTime} </p> `,

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm the appointment!",
      }).then((result) => {
        if (result.isConfirmed) {
          const appoint = {};
          console.log(patient);
          appoint.patientName = patient.patientName;
          appoint.patientId = patient.patientId;
          appoint.date = availability.date;
          appoint.doctorId = availability.doctorId;
          appoint.time = nextAppointmentTime;
          appoint.hospitalName = availability.hospitalName;
          appoint.calenderId = availability.calenderId;
          appoint.nextAppointmentTime = nextAppointmentTime;

          console.log(appoint);
          saveAppointment(appoint);
          window.location.reload();
        }
      });
    }
  };

  const changeAppointmentText = (event) => {
    const { value } = event.target;
    setSymptomsText(value);
  };

  const getDoctorsBySymptoms = () => {
    getDoctorsBySymptomsText(symptomsText).then(({ data }) => {
      console.log(data);
      if (data && data.length > 0) {
        setDoctorDetected(data[0]?.disease?.doctors);
      } else {
        setDoctorDetected(null);
        setnoDoctorDetected("No Doctors Detected. Please select a doctor");    
        }
    });
  };

  const selectDoctor = (doctorId) => {
    getdoctorAvailability(doctorId);
    setModalOpen(false);
  };

  return (
    <div>
      <Modal
        show={isModalOpen}
        onHide={() => {
          setModalOpen(false);
        
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Find appropriate doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!doctorDetected && (
          
          <TextArea onChange={changeAppointmentText} placeholder={"Type simple discription about the disesase you have"}style={{color:"black", height:"300px"}}>


          </TextArea>
           
          )}
         {!doctorDetected && (
          
         
          <div style={{textAlign:"center", paddingBottom:"15px", color:"red"}}>{noDoctorDetected}</div>  
          
          )}
          {doctorDetected && (
            <div>
            <div style={{textAlign:"center", paddingBottom:"15px", color:"#0d6efd"}}>{doctorDetected.length} doctor(s) detected</div>  
          
              <MDBTable
                        style={{ borderColor: "#99bfea" }}
                      >
                        <MDBTableHead>
                          <tr>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Speciality</th>
                            <th scope="col">Select</th>
                            <th></th>
                          </tr>
                        </MDBTableHead>
                {doctorDetected.map((doctor) => {
                  return (
                  
                    

                        <MDBTableBody>
                         
                            <tr>
                              <td>
                              {doctor.doctorName} 
                              </td>
                              <td>
                              {doctor.speciality}
                              </td>
                              <td> <Button
                        onClick={() => {
                          selectDoctor(doctor.doctorId);
                        }}
                      >
                        Select
                      </Button></td>
                            </tr>
                       
                        </MDBTableBody>
                      

                     
                    
                  );
                })}
             </MDBTable> 
            </div>
          )}  
         
         
        </Modal.Body>
        {!doctorDetected && (
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setModalOpen(false);
              location.reload(true);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={getDoctorsBySymptoms}>
            Find a Doctor
          </Button>
        </Modal.Footer>
         )}
      </Modal>

      <Navbar />

      <section id="content" class="container" style={{ width: "100%" }}>
        <PatientProfile />
        <div class="row" style={{ display: "flex", marginLeft: "30px" }}>
          <ProfileLeftBar />

          <div class="col-md-8" style={{ marginLeft: "50px" }}>
            <div class="panel">
              <div class="panel-heading">
                <span class="panel-icon"></span>
                <span
                  class="panel-title"
                  style={{ fontWeight: "bold", paddingLeft: "15px" }}
                >
                  {" "}
                  Book an appointment
                </span>
              </div>
              <div class="panel-body pn">
                <section class="" style={{ paddingLeft: "50px" }}>
                  <div action="#" class="form">
                    <div className="raw">
                      <div className="">
                        <div class="input-box">
                          {/* <label>Appointment No</label>
                  <input type="text" placeholder="" required /> */}
                          {/* <label>Patient ID</label>
                          <input
                            type="text"
                            value={patient?.patientName}
                            name="patient"
                            required
                          /> */}
                        </div>
                      </div>
                      <div className="">
                        <div class="input-box">
                          {/* 
                  <label>Patient ID</label>
                  <input type="text" placeholder={patient?.patientId} required /> */}
                        </div>
                      </div>
                    </div>
                    <div className="raw">
                      <div className="left">
                        <div className="input-box" style={{ width: "800px" }}>
                          <label>
                            Select Doctor<br></br>
                            <select
                              class="input-box-dd"
                              onChange={onChangeDoctor}
                              name="doctorName"
                            >
                              <option>Select Doctor</option>
                              {doctorList.map((doctor) => (
                                <option value={doctor?.doctorId}>
                                  {doctor?.doctorName} - {doctor?.speciality}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="right">
                        {" "}
                        <button
                          style={{
                            width: "300px",
                            backgroundColor: "white",
                            paddingTop: "30px",
                            color: "grey",
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            setDoctorDetected(null);
                            setModalOpen(true);
                          }}
                         
                        >
                          Get Help from UI Assistant
                        </button>
                      </div>
                    </div>
                    <br />

                    <div style={{ width: " 500px" }}>
                      {" "}
                      <MDBTable
                        style={{ borderColor: "#99bfea", width: "1000px" }}
                      >
                        <MDBTableHead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Doctor Arrival Time</th>
                            <th scope="col">Available Appointments</th>
                            <th> Hospital </th>
                            <th></th>
                          </tr>
                        </MDBTableHead>

                        <MDBTableBody>
                          {doctorAvailability.map((availability) => (
                            <tr>
                              <td
                                scope="col"
                                name="date"
                                onChange={changeValues}
                              >
                                <Moment format="YYYY-MM-DD">
                                  {availability?.date} 
                                </Moment>
                              </td>
                              <td
                                scope="col"
                                name="time"
                                onChange={changeValues}
                              >
                                {" "}
                                {availability?.time}
                              </td>
                              <td scope="col" name="" onChange={changeValues}>
                                {" "}
                                {availability.number_of_patients -
                                  availability.appointmentCount}
                              </td>
                              <td
                                scope="col"
                                name="hospital_name"
                                onChange={changeValues}
                              >
                                {" "}
                                {availability?.hospitalName}
                              </td>
                              <td>
                                {" "}
                                <Button
                                  value={appointmentbtn}
                                  style={{
                                    width: "200px",
                                    height: "40px",
                                    marginTop: "0",
                                  }}
                                  onClick={() => {
                                    makeAppointment(availability);
                                  }}
                                  disabled={
                                    availability.appointmentCount ==
                                    availability.number_of_patients
                                  }
                                >
                                  Book an Appointment
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </MDBTableBody>
                      </MDBTable>
                    </div>

                    <div className="raw">
                      <div className="left"></div>
                      <div className="right"></div>
                    </div>

                    <div className="raw">
                      <div className="left"></div>
                      <div className="right"> </div>
                    </div>

                    <div style={{ display: "flex" }}>
                      <br></br>
                    </div>
                    <br></br>

                    <br></br>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
