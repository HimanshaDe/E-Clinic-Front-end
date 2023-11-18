import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import PatientProfile from "../PatientProfile/PatientProfile";
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar";
import { getAllReports } from "../../../services/MedicleReports";
import { responsiveArray } from "antd/es/_util/responsiveObserver";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import "./PatientReports.css"

export default function PatientReports() {
  const [reportList, setreportList] = useState([]);

  const loadReportList = () => {
    getAllReports(id)
      .then((response) => {
        const data = response.data;
        setreportList(data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadReportList();
  }, []);

  let { id } = useParams();

  return (
    <div>
      <Navbar />

      <section id="content" class="container" style={{ width: "100%" }}>
        <PatientProfile />
        <div class="row" style={{ display: "flex", marginLeft: "30px" }}>
          <ProfileLeftBar />

          <div class="col-md-8" style={{ marginLeft: "50px" }}>
            <div class="panel">
              <div class="panel-heading">
                <span class="panel-icon"></span>
                <span
                  class="panel-title"
                  style={{ fontWeight: "bold", paddingLeft: "15px" }}
                >
                  {" "}
                  Medical Reports
                </span>
              </div>
 
              <div className="repotable"
               
           
                
              >   
            <MDBTable style={{borderColor:'#99bfea', marginLeft:'20px', width:'95%'}}>
      <MDBTableHead>
      <tr>
         
          <th scope='col'>Date</th>
          <th scope='col'>ReportType</th>
          <th scope='col'>Report</th> 
         
        </tr>
      </MDBTableHead>

      <MDBTableBody>
      {reportList.map((report) => (

        <tr> 
          <td scope='col'>
            <Moment format="YYYY-MM-DD">
            
            {report.date}
             </Moment>
            </td>
          <td scope='col'>{report.medicleTestType}</td>
          <td scope='col'>      <div>
                    {report.file ? (
                      <div style={{}}
                        onClick={() => {
                          let a = document.createElement("a");
                          a.href =
                            "data:application/octet-stream;base64," +
                            report.file;
                          a.download = "documentName.docx";
                          a.click();
                        }}
                      >
                        
                        <i
                          class="fa-solid fa-file-medical fa-6x"
                          style={{ color: "rgb(171 213 243)" }}
                        ></i>  
                      </div>
                    
                    ) : (
                      <></>
                    )}
                  </div></td> 
          
           </tr>
            ))}
       
      </MDBTableBody>
    
    </MDBTable>
                 



              </div>

              {/* <div style={{display:'flex', borderLeft:'1px solid #99bfea', borderRight:'1px solid #99bfea'}}>
              {reportList.map((report) => (


              <div>
                    {report.file ? (
                      <div style={{padding:'20px'}}
                        onClick={() => {
                          let a = document.createElement("a");
                          a.href =
                            "data:application/octet-stream;base64," +
                            report.file;
                          a.download = "documentName.pdf";
                          a.click();
                        }}
                      >
                        <br/>
                        <i
                          class="fa-solid fa-file-medical fa-8x"
                          style={{ color: "rgb(171 213 243)" }}
                        ></i>  {report.fileName}
                      </div>
                    
                    ) : (
                      <></>
                    )}
                  </div>
  ))}
 </div> */}

             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
