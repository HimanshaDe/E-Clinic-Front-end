import React, { useState } from "react";
import SideBar from "../SideBar/SideBar"
import './MedicleTestCategories.css'
import { Button ,Alert} from "react-bootstrap";
import { saveMedicalTests } from "../../../services/MedicalTestsCategoryService";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function MedicleTestCategories() {
const[medical_tests,setmedical_tests] = useState()
const [medicalTest,setmedicalTest] = useState()
const [description,setdescription] = useState()
  const submitForm = (event) => {
    event.preventDefault();
    
    saveMedicalTests(medical_tests)
      .then((data) => {
        NotificationManager.success("Success message", " Successfully added !")
        resetForm()
        
      })
      .catch((error) => {
       
        NotificationManager.error("error message", " Please check again !")
        
      });
  };

  const resetForm =()=>{
    setmedicalTest("")
    setdescription("")
   }

   const changeValues = (event) => {
    const { name, value } = event?.target;
    setmedical_tests({ ...medical_tests, [name]: value });
   
  };


  return (
    <div className="admindashboard">
      <div className="leftsidesidebar">
        <SideBar />
      </div>

      <div className="dashboardBody">
        <h1>Medical Tests</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <section class="container1">
          <form class="form" onSubmit={submitForm} >
            <div class="input-box">
              <label>Medicle Test Type</label>
              <input type="text"  
              name="medicalTest"
              value={medicalTest}
              onChange={changeValues}
              placeholder="Enter medical test" 
              required />
            </div>

            <div class="input-box">
              <label>Description</label>
              <textarea
                class="input-box"
                style={{ width: "100%", height: "200px" }}
                placeholder="Enter Description"
                onChange={changeValues}
                value={description}
                name="description"
                rows="4"
                cols="50"
              ></textarea>
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
      </div>
    </div>
  );
}
