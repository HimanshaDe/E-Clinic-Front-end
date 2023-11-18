import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./CalendarSchedule.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { getAllDoctors } from "../../../services/DoctorService";
import { getAllHospitals } from "../../../services/HospitalService";
import { saveCalender } from "../../../services/CalenderService";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function CalendarSchedule() {
  const [calender, setCalender] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [doctorList, setDoctorList] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);

  const loadDoctorList = () => {
    getAllDoctors()
   
      .then((response) => {
        const data = response.data;
        setDoctorList(data);
      })
      .catch((error) => {});
  };
  const loadHospitalList = () => {
    getAllHospitals()
   
      .then((response) => {
        const data = response.data;
        setHospitalList(data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadDoctorList();
    loadHospitalList();
  }, []);

  const submitForm = (event) => {
    console.log(calender);
    event.preventDefault();
    saveCalender(calender)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
        resetForm();
      })
      .catch((error) => {
        console.log(doctor);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const changesValues = (event) => {
    const { name, value } = event?.target;
    setCalender({ ...calender, [name]: value });
  };

  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Shedule Date & Time</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <form class="form" onSubmit={submitForm}>
          <section class="container1">
            <div className="form">
              <div>
                <p style={{ fontWeight: "bold" }}>Select doctor</p>{" "}
                {/* <select className="dropdowndid" name="doctorid" id="did">
            <option value="javascript">00001</option>{" "}
          </select> */}
                <div class="input-box speciality" style={{ width: "200px" }}>
                  <div class="column">
                    <div class="select-box">
                      <select name="doctorId" onChange={changesValues}>
                        <option hidden>Select doctor Name</option>
                        {doctorList.map((doctor) => (
                          <option value={doctor.doctorId}>{doctor.doctorName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div style={{ display: "flex" }}>
                <div class="input-box" style={{ width: "300px" }}>
                  <label>Select the date</label>
                  <input
                    type="date"
                    placeholder="YYYY-MM-DD"
                    required
                    name="date"
                    onChange={changesValues}
                  />
                </div>

                <div
                  class="input-box"
                  style={{ width: "500px", paddingLeft: "30px" }}
                >
                  <label> Arrival Time</label>
                  <input
                    type="time"
                    id="time1"
                    required
                    name="time"
                    onChange={changesValues}
                  />
                  {/* <input type="text" placeholder="Arrival Time" required /> */}
                </div>

                <div
                  class="input-box"
                  style={{ width: "500px", paddingLeft: "30px" }}
                >
                  <label>Number of patients</label>
                  <input
                    type="text"
                    placeholder="Number of patients"
                    required
                    name="number_of_patients"
                    onChange={changesValues}
                  />
                </div>
              </div>
              <br />
              <label>Select Hospital</label>
              <div class="input-box speciality" style={{ width: "400px" }}>
                <div class="column">
                  <div class="select-box">
                    <select name="hospitalName" onChange={changesValues}>
                      <option hidden>Select Hospital</option>
                      {hospitalList.map((hospital) => (
                        <option>{hospital.hospitalName} {" "} {hospital.address}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              
              <br></br>
              <br></br>
              <Button
                style={{ backgroundColor: "#2080c5", height: "45px" }}
                className="btnadding"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
