import Navbar from "../Navbar/Navbar";
import "./AboutUs.css";
import Background from "./3-100.jpg";
import group from "./group-happy.jpg";
import Footer from "../Footer/Footer";
import { getCount } from "../../../services/HomeService";
import React, { useEffect } from "react";
import { useState } from "react";

export default function AboutUs() {
  const [count, setCount] = useState([]);

  const loadCount = () => {
    getCount().then(({ data }) => {
      setCount(data);
    });
  };

  useEffect(() => {
    loadCount();
  }, []);

  return (
    <div>
      <Navbar />
      <img src={Background} style={{ width: "100%" }}></img>
      <br></br>
      <br></br>
      <br /><br />
      <section id="about" class="about-area ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center"></div>
            </div>
            <div className="aboutuscontent">
              <div className="leftarea">
                <img src={group} style={{ width: "100%" }}></img>
              </div>
              <div className="rightarea">
                {" "}
                <h1 className="topics" style={{ marginLeft: "50px" }}>
                  {" "}
                  About Us
                </h1>
                <br />{" "}
                <p className="aboutus_para">
                  Welcome to our doctor channeling website! We are a team of
                  experienced healthcare professionals dedicated to providing
                  patients with access to high-quality medical care. Our mission
                  is to connect patients with the best doctors and healthcare
                  providers in their area, making it easy to schedule
                  appointments and receive the care they need.
                  <p className="aboutus_para"> Our team
                  understands that navigating the healthcare system can be
                  overwhelming, which is why we are committed to providing a
                  simple and user-friendly platform for patients to find and
                  book appointments with trusted medical professionals. Whether
                  you're looking for a primary care physician, a specialist, or
                  a therapist, we have a wide range of healthcare providers to
                  choose from.</p> At our doctor channeling website, we value
                  transparency, professionalism, and patient satisfaction. We
                  strive to ensure that every patient has a positive experience
                  and receives the care they need to achieve optimal health and
                  well-being. We are proud to be a trusted resource for patients
                  and healthcare providers alike, and we look forward to helping
                  you on your healthcare journey.{" "}
                </p>
                <br></br>
              </div>
            </div>
          </div>
<br /><br /><br /><br />
          <div className="display_dhp">
            <div className="doctors">
              <div className="doc">
                <i
                  class="fas fa-user-md fa-6x "
                  style={{ color: "rgb(171 213 243)" }}
                ></i>
                <br></br>
                <p className="ico_name">Doctors</p>

                <label className="quantity">{count.doctorCount}</label>
              </div>
            </div>
            <div className="patients">
              <div className="pat">
                <i
                  class="fa-solid fa-users fa-6x "
                  style={{ color: "rgb(171 213 243)" }}
                ></i>
                <p className="ico_name" style={{ paddingLeft: "10px" }}>
                  Patients
                </p>
                <p className="quantity">{count.patientCount}</p>
              </div>
            </div>
            <div className="Hospitals">
              <div className="hos">
                <i
                  class="fa-solid fa-hospital fa-6x"
                  style={{ color: "rgb(171 213 243)" }}
                ></i>
                <p className="ico_name">Hospitals</p>
                <p className="quantity">{count.hospitalCount}</p>
              </div>
            </div>
          </div>

          <br></br><br></br>

          {/* <div class="">
            <div class="col-lg-6">
              <div class="about-content">
                <h5 class="about-title">Hi There! I'm Mark Parker</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul class="clearfix">
                  <li>
                    <div class="single-info d-flex align-items-center">
                      <div class="info-icon">
                        <i class="lni-calendar"></i>
                      </div>
                      <div class="info-text">
                        <p>
                          <span>Date of birth:</span> 8 June 1995
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="single-info d-flex align-items-center">
                      <div class="info-icon">
                        <i class="lni-envelope"></i>
                      </div>
                      <div class="info-text">
                        <p>
                          <span>Email:</span> parker@mysite.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="single-info d-flex align-items-center">
                      <div class="info-icon">
                        <i class="lni-phone-handset"></i>
                      </div>
                      <div class="info-text">
                        <p>
                          <span>Phone:</span> +1-202-555-0138
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="single-info d-flex align-items-center">
                      <div class="info-icon">
                        <i class="lni-map-marker"></i>
                      </div>
                      <div class="info-text">
                        <p>
                          <span>Location:</span> 4373, El Centro, CA
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
