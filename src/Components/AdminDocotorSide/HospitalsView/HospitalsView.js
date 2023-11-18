import React, { useEffect,useState} from "react";

import SideBar from "../SideBar/SideBar"
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getAllHospitals } from "../../../services/HospitalService";
import { Link } from "react-router-dom";

export default function HospitalsView() {


  const [hospitalList, sethospitalList] = useState([]);

  const loadHospitalList = () => {
    getAllHospitals()
      .then((response) => {
        const data = response.data;
        sethospitalList(data);
      })
      .catch((error) => {});
  };


  useEffect(() => {
    loadHospitalList();
  }, []);





  return (
    <div className="admindashboard">
    <div className="leftsidesidebar">
      <SideBar />
    </div>

    <div className="dashboardBody">
      <h1>Hospitals</h1>
      <br></br>
      <hr></hr>
      <br></br>
      <Link to='/add_hospital'>
        <Button style={{backgroundColor:"#2080c5"}}  className='btnadding' variant="primary">Add Hospitals</Button>
        
        
        </Link>
      <br></br><br></br><br></br>
      <MDBTable bordered>
      <MDBTableHead>
      <tr>
         
          <th scope='col'>Image</th>
          <th scope='col'>Hospital Name</th>
          <th scope='col'>Hospital Address</th> 
        </tr>
      </MDBTableHead>
      {hospitalList.map((hospital) => (
      <MDBTableBody>
        <tr>
          
          <td><div 
                 
                 onClick={() => document.querySelector(".input-field").click()}
               >
                 {hospital.imageName
              ? (
                   <img src={hospital.imageName} style={{width:'100px'}} alt="No image found" />
                 ) : (
                   <MdCloudUpload
                     color="#1475cf"
                     style={{ width: "40px", margin: "auto" }}
                   />
                 )}
               </div>  </td>
          <td>{hospital.hospitalName}</td>
          <td>{hospital.address}</td>
          {/* <td><Button style={{backgroundColor:"#2080c5"}} className='editbtn'  variant="primary">Edit</Button></td> */}
        </tr>
       
       
      </MDBTableBody>
        ))}
      
    </MDBTable>
    </div>
  </div>
  )
}
