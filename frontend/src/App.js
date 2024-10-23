import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import DoctorLogin from './Components/Login/DoctorLogin.jsx';
import PatientLogin from './Components/Login/PatientLogin.jsx'
import DoctorSignup from './Components/Signup/DoctorSignup.jsx'
import PatientSignup from './Components/Signup/PatientSignup.jsx'
import Footer from './Components/Footer/Footer';
import Bookanappointment from './Components/Bookanappointment/Bookanappointment';





function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path="/PatientLogin" element={<PatientLogin/>}/>
        <Route path="/DoctorSignup" element={<DoctorSignup/>}/>
        <Route path="/PatientSignup" element={<PatientSignup/>}/>
        <Route path="/Bookanappointment" element={<Bookanappointment/>}/>

      </Routes>
        <Footer />

      </BrowserRouter>

      
    </div>
  );
}

export default App;
