import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "../SideBar/SideBar";
import "./AddDoctors.css";
import { Alert, Button } from "react-bootstrap";
import { saveDoctor } from "../../../services/DoctorService";
import { MdCloudUpload, MdDelete } from "react-icons/md";


import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function DoctorAddingPanel() {
  const [gender, setGender] = useState();
  const [doctor, setDoctor] = useState({});
  const [isActiveStatus, setisActiveStatus] = useState();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [state, setState] = React.useState({ doctorName: "" });
  const [doctorName, setdoctorName] = useState();
  const [doj, setdoj] = useState();
  const [birthDate, setbirthDate] = useState();
  const [nic, setnic] = useState();
  const [contact, setcontact] = useState();
  const [email, setemail] = useState();
  const [imageName, setimageName] = useState();
  const [speciality, setspeciality] = useState();
  const [qualification, setqualification] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [conPassword, setconPassword] = useState();

  const resetForm = () => {
    setdoctorName("");
    setdoj("mm/dd/yyyy");
    setbirthDate("mm/dd/yyyy");
    setnic("");
    setcontact("");
    setemail("");
    setimageName("");
    setspeciality("speciality");
    setqualification("");
    setGender("");
    setusername("");
    setpassword("");
    setconPassword("");
  };

  const submitForm = (event) => {
    event.preventDefault();
    saveDoctor(doctor)
      .then((data) => {

        if(doctor.password !== doctor.conPassword){
          NotificationManager.error("error message", " Password is not matched!")
          return
        }
        
        NotificationManager.success("Success message", " Successfully added !");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const radioVal = (event) => {
    setGender(event.target.value);
  };

  const changeValues = (event) => {
    console.log(doctor.password)
    console.log(doctor.conPassword)
    const { name, value } = event?.target;
    setDoctor({ ...doctor, [name]: value });
    setGender(event.target.value);
    setisActiveStatus("true");
    
  };

  const uploadImage = (element) => {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setDoctor({ ...doctor, imageName: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Add New Doctor</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form class="form" onSubmit={submitForm}>
            <div className="formtop">
              <div className="formtopleftside">
                <div style={{ display: "flex" }}>
                  <div className="left">
                    {" "}
                    {/* <div class="input-box">
                      <label>Doctor ID</label>
                      <label style={{ paddingLeft: "30px" }}>: 0001</label>
                    </div> */}
                  </div>
                  <div className="right">
                    {" "}
                    <div className="right">
                      {" "}
                      <div class="input-box" style={{ width: "300px" }}></div>
                    </div>
                  </div>
                </div>

                <div class="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    required
                    name="doctorName"
                    value={doctorName}
                    onChange={changeValues}
                  />
                </div>
                <div class="input-box">
                  <label>Date of Join</label>
                  <input
                    type="date"
                    placeholder="YYYY-MM-DD"
                    required
                    value={doj}
                    name="doj"
                    onChange={changeValues}
                  />
                </div>

                <div class="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    placeholder="Enter birth date"
                    required
                    name="birthDate"
                    value={birthDate}
                    onChange={changeValues}
                  />
                </div>

                <div class="input-box">
                  <label>NIC</label>
                  <input
                    type="text"
                    name="nic"
                    value={nic}
                    placeholder="Enter your NIC"
                    required
                    onChange={changeValues}
                  />
                </div>

                <div class="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    required
                    value={contact}
                    onChange={changeValues}
                    name="contact"
                  />
                </div>
                <div class="input-box">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    value={email}
                    name="email"
                    onChange={changeValues}
                  />
                </div>
              </div>
              <div className="formtoprightside">
                <div
                  className="doctorimg"
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {doctor.imageName
               ? (
                    <img src={doctor.imageName} alt="No image found" />
                  ) : (
                    <MdCloudUpload
                      color="#1475cf"
                      style={{ width: "40px", margin: "auto" }}
                    />
                  )}
                </div>
                <input
                  className="image_upload_area"
                  type="file"
                  accept="image/*"
                  name="imageName"
                  onChange={uploadImage}
                />
               
              </div>
            </div>
            <div class="input-box speciality" style={{ width: "58%" }}>
              <div class="column">
                <div class="select-box">
                  <select
                    name="speciality"
                    value={speciality}
                    onChange={changeValues}
                  >
                    <option hidden>Select Speciality</option>
                    <option>Allergists</option>
                    <option>Anaesthesiologist</option>
                    <option>Cardiologist</option>
                    <option>Clinical Pharmocologist</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="input-box" style={{ width: "58%" }}>
              <label>Qualifications</label>
              <input
                type="text"
                placeholder="Enter qualifications"
                required
                value={qualification}
                name="qualifications"
                onChange={changeValues}
              />
            </div>
            <div class="gender-box">
              <h3>Gender</h3>
              <div class="gender-option">
                <div class="gender" value={gender}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={changeValues}
                  />
                  <label for="check-male">male</label>
                </div>

                <div class="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={changeValues}
                  />
                  <label for="check-female">Female</label>
                </div>
              </div>
            </div>
            <div class="input-box" style={{ width: "58%" }}>
              <label>Username</label>
              <input
                name="username"
                value={username}
                onChange={changeValues}
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div class="input-box" style={{ width: "58%" }}>
              <label>Enter Password</label>
              <input
                value={password}
                type="password"
                onChange={changeValues}
                name="password"
                placeholder="Password"
               
                required
              />
            </div>
            <div class="input-box" style={{ width: "58%" }}>
              <label>Confirm Password</label>
              <input
                value={conPassword}
                name="conPassword"
                onChange={changeValues}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <br></br>
            {/* <div class="" >
              <label    style={{ paddingRight:'30px' }}>Active status</label>
              <input
                value={isActiveStatus}
               onChange={changeValues}
                type="checkbox"
                
                
                name="isActiveStatus"
              />
            </div> */}

            <Button
              style={{ backgroundColor: "#2080c5" }}
              className="btnadding"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <br></br>
            <br></br>
          </form>
        </section>
      </div>
    </div>
  );
}
