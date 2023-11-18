import React, { useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { getAllDoctors } from "../../../services/DoctorService";
import './Doctors.css'
import { useState } from "react";
import Footer from "../Footer/Footer";

export default function Doctors() {

  const [doctorList, setDoctorList] = useState([]);

  const loadDoctorList = () => {
    getAllDoctors()
      .then((response) => {
        const data = response.data;
        setDoctorList(data);
      })
      .catch((error) => {});
  };
 

  useEffect(() => {
    loadDoctorList();
  }, []);
  
  return (
    <div>
      <div> <Navbar /></div>
   
 <div> <div class="row justify-content-center">
           
           <div class="section-title text-center">
           <h1 className="topics" style={{marginLeft:'50px', marginTop:'20px'}}>Doctors</h1>
     <br></br>
       <div className="doc_display_area">
       {doctorList.map((doctor) => (

<MDBRow style={{width:'320px', margin:"10px"}}>
      <MDBCol>
        <MDBCard>
          <MDBCardImage></MDBCardImage>
          <div
            
             onClick={() => document.querySelector(".input-field").click()}
           >
             {doctor.imageName
          ? (
               <img style={{width:"206px", padding:"15px"}}src={doctor.imageName} alt="No image found" />
             ) : (
               <MdCloudUpload
                 color="#1475cf"
                 style={{ width: "40px", margin: "auto" }}
               />
             )}
           </div>
        
          <MDBCardBody>
            <MDBCardTitle>Dr. {doctor.doctorName}</MDBCardTitle>
            <p>&#40;{doctor.speciality}&#41;</p>
            <p>{doctor.qualifications}</p>
            <MDBCardText>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
    </MDBRow>




//        <MDBCard style={{ width:'70%',margin:'auto', marginBottom:'20px' }}>
//    <MDBRow className='g-0'>
//      <MDBCol md='4'>
//        <MDBCardImage style={{height:'300px', width:"300px",border:"1px solid #d2d2d2",margin:'20px'}} />
//      </MDBCol>
//      <MDBCol md='8'>
//        <MDBCardBody>
//          <MDBCardTitle>{doctor.doctorName}</MDBCardTitle>
//          <MDBCardText>
//          MBBS – Bachelor of Medicine, Bachelor of Surgery.
//          </MDBCardText>
//          <MDBCardText>
//            {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
//          </MDBCardText>
//        </MDBCardBody>
//      </MDBCol>
//    </MDBRow>
//  </MDBCard>
 
 ))}

       </div>




       
           </div>
         
       </div></div><br/>
       <Footer />
</div>
  )
}
