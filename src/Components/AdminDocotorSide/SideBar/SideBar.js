import React from "react"
import "./SideBar.css"
import Logo from './logo4.png'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SideBar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div class="dashboardbodyarea">
      <CDBSidebar
        style={{ width: "fit-content"  }}
        textColor="#fff"
        backgroundColor="#2080c5"
      >
        <CDBSidebarHeader className="logospand" prefix={<i  style={{fontSize:"20px"}} className="fa fa-bars fa-large"></i>}>
          <Link
            to="/adminDashboard"
            className="navbarlogo"
            style={{ color: "inherit"  }}
          >
            <img src={Logo} className="logo"></img>
            E-Clinic
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              style={navLinkStyles}
              exact
              to="/doctors"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user-md" className="navbartext">
                Doctors
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              style={navLinkStyles}
              exact
              to="/patients"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="users" className="navbartext">
                Patients
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              style={navLinkStyles}
              exact
              to="/upload_reports"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="file-medical" className="navbartext">
               Upload Medical Reports
              </CDBSidebarMenuItem>
            </NavLink>
          
            <NavLink
              style={navLinkStyles}
              exact
              to="/appointments"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="calendar-alt" className="navbartext">
                Appointments
              </CDBSidebarMenuItem>
            </NavLink>



            <NavLink
              style={navLinkStyles}
              exact
              to="/doctor_speciality"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="award" className="navbartext">
              Doctors' Speciality Types
              </CDBSidebarMenuItem>
            </NavLink>  
            
            <NavLink
              style={navLinkStyles}
              exact
              to="/medical_tests_categories"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="file-medical-alt" className="navbartext">
              Medical Lab Tests Categories   
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              style={navLinkStyles}
              exact
              to="/articles"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="book-open" className="navbartext">
                Articles
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              style={navLinkStyles}
              exact
              to="/hospitals_list"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="hospital" className="navbartext">
                Hospitals
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              style={navLinkStyles}
              exact
              to="/schedule_calender"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="hospital" className="navbartext">
                Calendar
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{}}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <Link to="/" className="navbartext" style={{ color: "inherit" }}>
              <CDBSidebarMenuItem icon="sign-out-alt">
                Logout
              </CDBSidebarMenuItem>
            </Link>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
