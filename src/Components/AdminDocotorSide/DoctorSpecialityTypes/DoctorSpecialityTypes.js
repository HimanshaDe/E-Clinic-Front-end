
import React, { useEffect,useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Alert, Button } from "react-bootstrap";
import { saveDoctorSpeciality } from "../../../services/DoctorSpecialityService";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";


export default function DoctorSpecialityTypes() {

  const [specialityType,setspecialityType] = useState()
  const [description,setdescription] = useState()

  const [speciality, setspeciality] = useState();
  const submitForm = (event) => {
    event.preventDefault();
    saveDoctorSpeciality(speciality)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !");
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("error message", " Please check again !");
      });
  };

  const resetForm = () => {
    setspecialityType("")
    setdescription("")
  };


  const changeValues = (event) => {
    const { name, value } = event?.target;
    setspeciality({ ...speciality, [name]: value });
    
  };

  return (




    
    <div className="admindashboard">
    <div className="leftsidesidebar">
      <SideBar />
    </div>

    <div className="dashboardBody">
      <h1>Speciality</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <section class="container1">
          <form  class="form" onSubmit={submitForm}>
            <div class="input-box">
              <label>Speciality Type</label>
              <input type="text"  
              placeholder="Enter Speciality"
              name="specialityType"
              value={specialityType}
              onChange={changeValues}
               required />
            </div>

            <div class="input-box">
              <label>Description</label>
              <textarea
                class="input-box"
                style={{ width: "100%", height: "200px" }}
                id=""
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={changeValues}
                rows="4"
                cols="50"
              ></textarea>
            </div>

            <Button
              style={{ backgroundColor: "#2080c5" }}
              className="btnadding"
              variant="primary"
              type='submit'
            >
              Submit
            </Button>
          
          </form>
        </section>

    </div>
  </div>
  )
}
