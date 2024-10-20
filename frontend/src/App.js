import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup'
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
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Bookanappointment" element={<Bookanappointment/>}/>

      </Routes>
        <Footer />

      </BrowserRouter>

      
    </div>
  );
}

export default App;
