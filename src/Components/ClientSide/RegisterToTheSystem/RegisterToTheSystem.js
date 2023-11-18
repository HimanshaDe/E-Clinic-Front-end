import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Alert, Button } from "react-bootstrap";
import "./RegisterToTheSystem.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";



import { savePatient } from "../../../services/PatientService";

export default function RegisterToTheSystem() {
  const[patientName,setpatientName] = useState()
  const[contact,setcontact] = useState()
  const[birthDate,setbirthDate] = useState()
  const[nic,setnic] = useState()
  const[doj,setdoj] = useState()
  const[email,setemail] = useState()
  const[address,setaddress] = useState()
  const[username,setusername] = useState()
  const[password,setpassword] = useState()
  const[conpassword,setconpassword] = useState()


  const [gender, setGender] = useState()
  const [patient, setPatient] = useState({})

  const resetForm =()=>{
    setpatientName("")
    setGender("")
    setcontact("")
    setbirthDate("")
    setnic("")
    setdoj("")
    setemail("")
    setaddress("")
    setusername("")
    setpassword("")
    setconpassword("")

  }



  const submitForm = (event) => {


    event.preventDefault();
    
    savePatient(patient)
      .then((data) => {

        if(patient.password !== patient.conpassword){
          NotificationManager.error("error message", " Password is not matched!")
          return
        }
        
        NotificationManager.success("Success message", " Successfully added !")
        resetForm()
        
      })
      .catch((error) => {
        console.log(error)
        NotificationManager.error("error message", " Please check again !")
        
      });
  };

  const radioVal = (event) => {
   
    setGender(event.target.value);

    
  };
  const changeValues = (event) => {
    const { name, value } = event?.target;
    setPatient({ ...patient, [name]: value });
   
    setGender(event.target.value);

    
  };
 
  return (
    <div>
      <Navbar />
      <br></br>

      <div className="registrationarea">
        <br></br>
        <h1 className="topics">Register to the system</h1>

        <section class="container1">
          <form class="form" onSubmit={submitForm}>
           
              <div className="" style={{ width: "87%"}}>
              <div class="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="patientName"
                    placeholder="Enter full name"
                    onChange={changeValues}
                    value={patientName}
                    required
                  />
                </div>
              </div>
              <div className="right">
               
              </div>
         
            <div className="raw">
              <div className="left">
                <div class="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    onChange={changeValues}
                    value={contact}
                    required
                    name="contact"
                  />
                </div>
              </div>
              <div className="right">
                <div class="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    placeholder="Enter birth date"
                    onChange={changeValues}
                    value={birthDate}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="raw">
              <div className="left">
                <div class="gender-box">
                  <h3>Gender</h3>
                  <div class="gender-option">
                    <div class="gender" value={gender}>
                      <input
                        type="radio"
                        id="check-male"
                        onChange={changeValues}
                        name="gender"
                        value="male"
                        
                      />
                      <label for="check-male">male</label>
                    </div>
                    <div class="gender">
                      <input type="radio" 
                      value="female"
                       onChange={changeValues}
                       id="check-female" name="gender" />
                      <label for="check-female">Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div class="input-box">
                  <label>NIC</label>
                  <input
                    type="text"
                    placeholder="Enter your NIC Number"
                    onChange={changeValues}
                    required
                    name="nic"
                    value={nic}
                  />
                </div>
              </div>
            </div>

            <div className="raw">
              <div className="left">
                <div class="input-box">
                  <label>Date of join</label>
                  <input
                    type="date"
                    name="doj"
                    value={doj}
                    placeholder="Enter birth date"
                    onChange={changeValues}
                    required
                  />
                </div>
              </div>
              <div className="right">
                {" "}
                <div class="input-box">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    onChange={changeValues}
                    required
                    value={email}
                    name="email"
                  />
                </div>
              </div>
            </div>

            <div style={{ width: "87%" }} class="input-box address">
              <label>Address</label>
              <input type="text" 
              placeholder="Enter your address" 
              onChange={changeValues}
              name="address"
              required
              value={address}
              />
             
            </div>

            <div className="raw">
              <div className="left">
                <div class="input-box">
                  <label>Username</label>
                  <input 
                  type="text" 
                  placeholder="Username" 
                  name="username"
                  onChange={changeValues}
                  value={username}
                  required />
                </div>
              </div>
              <div className="right">
                <div class="input-box">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter New Password"
                    name="password"
                    onChange={changeValues}
                    value={password}
                    required
                  />
                </div>
                <div class="input-box">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={changeValues}
                    name="conpassword"
                    value={conpassword}
                    required
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Button
                type="submit"
                style={{ backgroundColor: "#2080c5" }}
                className="btnadding"
                variant="primary"
              >
                Submit
              </Button>
              <br></br>
            </div>
            <br></br>
          
            <br></br>
          </form>
        </section>
      </div>
    </div>
  );
}
