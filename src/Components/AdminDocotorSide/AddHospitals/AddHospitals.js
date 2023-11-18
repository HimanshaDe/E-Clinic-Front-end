import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Button, Alert } from "react-bootstrap";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { saveHospital } from "../../../services/HospitalService";

export default function AddHospitals() {
  const [hospital, sethospital] = useState({});
  const [adress, setadress] = useState();
  const [imageName, setimageName] = useState();
  const [hospitalName, sethospitalName] = useState();

  const resetForm = () => {
    setadress("");
    sethospitalName("");
    setimageName("");
  };
  const submitForm = (event) => {
    event.preventDefault();

    saveHospital(hospital)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const changeValues = (event) => {
    const { name, value } = event?.target;
    sethospital({ ...hospital, [name]: value });
  };
  const uploadImage = (element) => {
    let file = element.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      sethospital({ ...hospital, imageName: reader.result });
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Add New Hospital</h1>
        <br></br>
        <hr></hr>
        <br></br>

        <section class="container1">
          <form onSubmit={submitForm} class="form">
            <div className="formtop">
              <div className="formtopleftside">
                <div class="input-box">
                  <label>Name</label>
                  <input
                    type="text"
                    value={hospitalName}
                    onChange={changeValues}
                    placeholder="Name of the Hospital"
                    name="hospitalName"
                    required
                  />
                </div>
                <div class="input-box">
                  <label>Address</label>
                  <textarea
                    class="input-box"
                    style={{ width: "100%", height: "200px" }}
                    id=""
                    placeholder="Enter Address"
                    name="address"
                    value={adress}
                    onChange={changeValues}
                    rows="10"
                    cols="50"
                  ></textarea>
                </div>
              </div>
              <div className="formtoprightside">
              <div
                  className="doctorimg"
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  {hospital?.imageName
               ? (
                    <img src={hospital?.imageName} alt="No image found" />
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
            <Button
              style={{ backgroundColor: "#2080c5" }}
              className="btnadding"
              type="submit"
              variant="primary"
            >
              Submit
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
