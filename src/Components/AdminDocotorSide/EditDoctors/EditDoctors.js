import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { getDoctorById } from "../../../services/DoctorService";
import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { updateDoctor } from "../../../services/DoctorService";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function EditDoctors() {
  const submitForm = (event) => {
    event.preventDefault();
    updateDoctor(doctor)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

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

  const [doctor, setDoctor] = useState([]);
  let { id } = useParams();

  const loadDoctor = () => {
    getDoctorById(id).then(({ data }) => {
      setDoctor(data);
    });
  };

  useEffect(() => {
    loadDoctor();
  }, []);

  const changeValues = (event) => {
    const { name, value } = event?.target;
    setDoctor({ ...doctor, [name]: value });
    setisActiveStatus("true");
  };

  const changeStatus = (event) => {
    setDoctor({ ...doctor, activeStatus: event?.target?.checked });
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
        <h1>Edit Doctor</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form onSubmit={submitForm} class="form">
            <div className="formtop">
              <div className="formtopleftside">
                <div class="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="doctorName"
                    placeholder="Enter full name"
                    required
                    onChange={changeValues}
                    value={doctor?.doctorName}
                  />
                </div>

                <div class="input-box">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    required
                    value={doctor?.email}
                    name="email"
                    onChange={changeValues}
                  />
                </div>
                <div class="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    required
                    value={doctor?.contact}
                    onChange={changeValues}
                    name="contact"
                  />
                </div>
                <div class="input-box">
                  <label>NIC</label>
                  <input
                    type="text"
                    name="nic"
                    value={doctor?.nic}
                    placeholder="Enter your NIC"
                    required
                    onChange={changeValues}
                  />
                </div>
                <div class="input-box" style={{ width: "58%" }}>
                  <label>Username</label>
                  <input
                    name="username"
                    value={doctor?.username}
                    onChange={changeValues}
                    type="text"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="input-box" style={{ width: "58%" }}>
                  <label>Enter Password</label>
                  <input
                    value={doctor?.password}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="input-box" style={{ width: "58%" }}>
                  <label>Confirm Password</label>
                  <input
                    value={doctor?.password}
                    name="password"
                    onChange={changeValues}
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
              <div className="formtoprightside">
                <div
                  className="doctorimg"
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {doctor.imageName ? (
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

            
            {/* <div class="">
              <label style={{ paddingRight: "30px" }}>Active status</label>
              <input
                type="checkbox"
                name="activeStatus"
                onChange={changeStatus}
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
          </form>
        </section>
      </div>
    </div>
  );
}
