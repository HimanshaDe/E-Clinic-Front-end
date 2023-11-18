import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-white text-muted">
        <section class="footer_section">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h2 class="text-uppercase fw-bold mb-4">
                E-CLINIC
                </h2>
                <p>
                 We provide medical services that you can trust!
                </p>
                <p style={{textAlign:'justify'}}>e-clinic is a system that provides the service of channeling doctors. After opening an account, users are given the facility to channel their desired doctor. The facility of finding the most suitable doctor by entering one's symptoms is also a service provided by the system.</p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/home" class="text-reset">
                 
                      Home
                
                  </Link>
                </p>
                <p>
 <Link to="/about_us"  class="text-reset">
                  
                    About us
                 
                  </Link>
                </p>
                <p>
                 <Link to="/medical_articles"  class="text-reset">
                    Articles
                       </Link>
                </p>
                <p>
                  <Link to="/doctors_list"  class="text-reset">
                    Doctors
                       </Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>

                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567
                  88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-secondary"></i> + 01 234 567
                  89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
