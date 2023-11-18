import React from "react";
import "./AdminDoctorSelection.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Doctor from './doctors.png';
import Admin from './admin.png';
import { Link } from "react-router-dom";
import Navbar from "../../ClientSide/Navbar/Navbar";

export default function AdminDoctorSelection() {
  return (
    <div className="bodyarea">
<Navbar />
      <div className="selectionarea">
        <div className="leftside">
        <Card className="cardlogin" style={{ width: '18rem' }}>
        <img src={Admin} />
      <Card.Body>
        <Card.Title className="crd_title">Admin</Card.Title>
       
        <Link to='/adminlogin'>
        
          <Button style={{backgroundColor:"#2080c5",border:"none"}} className="button" variant="dark" >Login</Button></Link>
      </Card.Body>
    </Card>
        </div>
        <div className="rightside">
        <Card className="cardlogin" style={{ width: '18rem' }}>
        <img src={Doctor} />
      <Card.Body>
        <Card.Title className="crd_title">Doctor</Card.Title>
        
        <Link to='/doctorlogin'> <Button style={{backgroundColor:"#2080c5", border:"none"}} className="button"  variant="dark">Login</Button></Link>
      </Card.Body>
    </Card>
    
        </div>
      </div>
    </div>
  );
}
