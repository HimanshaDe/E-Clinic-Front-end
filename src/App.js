import logo from './logo.svg';
import './App.css';
import Part1 from './Components/Part1';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDoctorSelection from './Components/AdminDocotorSide/AdminDoctorSelection/AdminDoctorSelection';
import AdminLoginPanel from './Components/AdminDocotorSide/AdminLoginPanel/AdminLoginPanel';
import DoctorLoginPanel from './Components/AdminDocotorSide/DoctorLoginPanel/DoctorLoginPanel';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/AdminDocotorSide/Dashboard/Dashboard'
import DoctorView from './Components/AdminDocotorSide/DoctorViewPanel/DoctorViewPanel'
import PatientView from './Components/AdminDocotorSide/PatientViewPanel/PatientViewPanel'
import AddDoctor from './Components/AdminDocotorSide/AddDoctors/AddDoctors'
import ArticleView from './Components/AdminDocotorSide/ArticleViewPanel/ArticleViewPanel'
import AppointmentView from './Components/AdminDocotorSide/AppointmentPanel/AppointmentPanel'
import DoctorSpecialityTypes from './Components/AdminDocotorSide/DoctorSpecialityTypes/DoctorSpecialityTypes'
import TestsCategories from './Components/AdminDocotorSide/MedicleTestCategories/MedicleTestCategories'
import AddArticles from './Components/AdminDocotorSide/AddArticles/AddArticles'
import EditDoctors from './Components/AdminDocotorSide/EditDoctors/EditDoctors'
import EditArticles from './Components/AdminDocotorSide/EditArticles/EditArticles'
import ReportUpload from './Components/AdminDocotorSide/ReportUpload/ReportUpload'
import EditPatients from './Components/AdminDocotorSide/EditPatients/EditPatients'
import Navbar from './Components/ClientSide/Navbar/Navbar'
import Articles from './Components/ClientSide/Articles/Articles'
import AboutUs from './Components/ClientSide/AboutUs/AboutUs'
import Home from './Components/ClientSide/Home/Home'
import Doctor from './Components/ClientSide/Doctors/Doctors'
import RegisterToTheSystem from './Components/ClientSide/RegisterToTheSystem/RegisterToTheSystem'
import PatientLogin from './Components/ClientSide/PatientLogin/PatientLogin'
import PatientProfile from './Components/ClientSide/PatientProfile/PatientProfile'
import ProfileLeftBar from './Components/ClientSide/ProfileLeftBar/ProfileLeftBar'
import Profile from './Components/ClientSide/ProfileProfile/ProfileProfile'
import ProfileHistory from './Components/ClientSide/ProfileHistory/ProfileHistory'
import PatientReports from './Components/ClientSide/PatientReports/PatientReports'
import HospitalsView from './Components/AdminDocotorSide/HospitalsView/HospitalsView'
import AddHospitals from './Components/AdminDocotorSide/AddHospitals/AddHospitals'
import ProfileAppointment from './Components/ClientSide/ProfileAppointment/ProfileAppointment'
import DoctorProfile from './Components/AdminDocotorSide/DoctorProfile/DoctorProfile'
import DoctorProfilePanel from './Components/AdminDocotorSide/DoctorProfilePanel/DoctorProfilePanel'
import LogoTop from './Components/Common/LogoTop/LogoTop'
import DoctorAppointment from './Components/AdminDocotorSide/DoctorAppointment/DoctorAppointment'
import DoctorReportView from './Components/AdminDocotorSide/DoctorReportView/DoctorReportView'
import CalendarSchedule from './Components/AdminDocotorSide/CalendarSchedule/CalendarSchedule'
import Footer from './Components/ClientSide/Footer/Footer'


function App() {
  return (
    <div className="App">
   
      <Routes>
      <Route path="/admin_and_doctor" element={<AdminDoctorSelection />}/>
      <Route path="/doctorlogin" element={  <DoctorLoginPanel/>}/>
      <Route path="/adminlogin" element={   <AdminLoginPanel/>}/>
      <Route path="/adminDashboard" element={   <Dashboard/>}/>
      <Route path="/doctors" element={   <DoctorView/>}/>
      <Route path="/patients" element={   <PatientView/>}/>
      <Route path="/add_doctor" element={   <AddDoctor/>}/>
      <Route path="/articles" element={   <ArticleView/>}/>
      <Route path="/appointments" element={   <AppointmentView/>}/>
      <Route path="/doctor_speciality" element={   <DoctorSpecialityTypes/>}/>
      <Route path="/medical_tests_categories" element={   <TestsCategories/>}/>
      <Route path="/add_articles" element={   <AddArticles/>}/>
      <Route path="/edit_doctors/:id" element={   <EditDoctors/>}/>
      <Route path="/edit_article/:id" element={<EditArticles/>}/>
      <Route path="/upload_reports" element={   <ReportUpload/>}/>
      <Route path="/edit_patients" element={   <EditPatients/>}/>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/medical_articles" element={<Articles />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/" element={<Home />} />
      <Route path="/doctors_list" element={<Doctor />} />
      <Route path="/patient_registration" element={<RegisterToTheSystem />}/>
      <Route path="/patient_login" element={<PatientLogin />}/>
      <Route path="/patient_pro" element={<PatientProfile />}/>
      <Route path="/profile_left" element={<ProfileLeftBar />}/>
      <Route path="/patient_profile/:id" element={<Profile />}/>
      <Route path="/patient_Appointment_History/:id" element={<ProfileHistory />}/>
      <Route path="/patient_reports/:id" element={<PatientReports />}/>
      <Route path="/hospitals_list" element={<HospitalsView />}/>
      <Route path="/add_hospital" element={<AddHospitals/>}/>
      <Route path="/book_an_appointment/:id" element={<ProfileAppointment/>}/>
      <Route path="/doctor_profile/:id" element={<DoctorProfile />}/>
      <Route path="/doctor_profile_panel/:id" element={<DoctorProfilePanel />}/>
      <Route path="/top_logo" element={<LogoTop/>}/>
      <Route path="/doc_appointment_view/:id" element={<DoctorAppointment/>}/>
      <Route path="/patient_medical_report/:id" element={<DoctorReportView/>}/>
      <Route path="/schedule_calender" element={<CalendarSchedule/>}/>
      <Route path="/footer" element={<Footer />}/>
      </Routes>

   
   
    </div>
  );
}

export default App;
