import React from "react";
import SideBar from "../SideBar/SideBar";
import Button from "react-bootstrap/Button";

export default function EditPatients() {
  return (
    <div className="admindashboard">
    <div className="leftsidesidebar">
      <SideBar />
    </div>

    <div className="dashboardBody">
      <h1>Edit Patient Details</h1>
      <br></br>
      <hr></hr>
      <br></br>

      <section class="container1">
        <form action="#" class="form">
          <div className="raw">
            <div className="left">
              <div class="input-box">
                <label>Patient ID</label>
                <input type="text" placeholder="" required />
              </div>
            </div>
            <div className="right">
            <div class="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>
            </div>
          </div>
          <div className="raw">
            <div className="left">
              <div class="input-box">
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
            <div className="right">
              <div class="input-box">
                <label>Birth Date</label>
                <input type="date" placeholder="Enter birth date" required />
              </div>
            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div class="gender-box">
                <h3>Gender</h3>
                <div class="gender-option">
                  <div class="gender">
                    <input
                      type="radio"
                      id="check-male"
                      name="gender"
                      checked
                    />
                    <label for="check-male">male</label>
                  </div>
                  <div class="gender">
                    <input type="radio" id="check-female" name="gender" />
                    <label for="check-female">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
            <div class="input-box">
                <label>NIC</label>
                <input type="text" placeholder="Enter your NIC Number" required />
              </div>
            </div>
          </div>

          <div className="raw">
            <div className="left">
            <div class="input-box">
                <label>Date of join</label>
                <input type="date" placeholder="Enter birth date" required />
              </div>
            </div>
            <div className="right"> <div class="input-box">
                <label>Email Address</label>
                <input
                  type="text"
                  placeholder="Enter email address"
                  required
                />
              </div></div>
          </div>

          <div style={{width:'90%'}} class="input-box address">
            <label>Address</label>
            <input  type="text" placeholder="Enter your address" required />
            
            <div class="column">
             
              <input type="text" placeholder="Enter your city" required />
            </div>
           
           
          </div>

          <div className="raw">
            <div className="left">
            <div class="input-box">
              <input type="text" placeholder="Enter your region" required />
               </div>
            </div>
            <div className="right">
            <div class="input-box">
              <input type="number" placeholder="Enter postal code" required />
            </div>
            </div>
          </div>


          <Button
            style={{ backgroundColor: "#2080c5" }}
            className="btnadding"
            variant="primary"
          >
            Submit
          </Button>
          
        </form>
      </section>
    </div>
  </div>
  )
}
