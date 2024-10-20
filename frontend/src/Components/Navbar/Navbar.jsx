import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  const [menu,setMenu] = useState("home");

  return (
	// Navbar
  
  <nav>
    <div className='h-8 bg-[#2DAF70] flex justify-between px-[60px] p-1 sticky'>
        <ul className='flex text-white gap-10'>
          <li><FontAwesomeIcon icon={faPhone} className="text-base" /> +2347030616145</li>       
          <li> <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2 text-base" /> company@gmail.com</li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-2 text-base" /> 25 Aina road, Mushin, Abuja.</li>
        </ul>
        <ul className='flex gap-4'>
          <li><FontAwesomeIcon icon={faFacebook} className="text-white text-base" /></li>
          <li><FontAwesomeIcon icon={faTwitter} className="text-base text-white" /></li>
          <li><FontAwesomeIcon icon={faInstagram} className="text-base text-white" /></li>
          <li><FontAwesomeIcon icon={faLinkedin} className="text-base text-white" /></li>
        </ul>
    </div>
    <div className='px-[40px] bg-[#F5F5F5]'>
    <div className='navbar flex justify-between items-center p-4 bg-slate-10'>
      <div className="nav-logo">
	      <img className='h-10 w-auto' src={Logo} alt="Logo" />
      </div>

      <ul className='nav-menu flex space-x-10 cursor-pointer text-[20px]'>
      <li onClick={() => setMenu("home")} className="text-black hover:text-[#00ADEF] font-semibold"><Link to="/">Home</Link>{menu==="home"?<hr className="border-0 w-[60%] h-[3px] rounded-[10px] bg-red-600 mt-1"/>:<></>}</li>
      <li onClick={() => setMenu("about")} className="text-black hover:text-[#00ADEF] font-semibold"><Link to="/about">About</Link>{menu==="about"?<hr className="border-0 w-[60%] h-[3px] rounded-[10px] bg-red-600 mt-1"/>:<></>}</li>
      <li onClick={() => setMenu("services")} className="text-black hover:text-[#00ADEF] font-semibold"><Link to="/services">Services</Link>{menu==="services"?<hr className="border-0 w-[60%] h-[3px] rounded-[10px] bg-red-600 mt-1"/>:<></>}</li>
      <li onClick={() => setMenu("contact")} className="text-black hover:text-[#00ADEF] font-semibold"><Link to="/contact">Contact</Link>{menu==="contact"?<hr className="border-0 w-[60%] h-[3px] rounded-[10px] bg-red-600 mt-1"/>:<></>}</li>
      
	
      </ul>

       {/* Login/signup */}
       <div className='Login/signup flex justify-between gap-3'>
       <div className='signup text-white bg-[#2DAF70] rounded-lg w-60 h-10 text-xl p-1 text-center font-semibold'>
          <Link to="/Bookanappointment">
            <button className=''>Book an Appointment</button>
          </Link>
        </div>
          <div className='signin text-white bg-[#00ADEF] rounded-lg w-28 h-10 text-xl p-1 text-center font-semibold'>
        
            <Link to="/login">
              <button className='c'>
              Login
              </button>
            </Link>
        </div>

        <div className='signup text-white bg-[#00ADEF] rounded-lg w-28 h-10 text-xl p-1 text-center font-semibold'>
          <Link to="/signup">
            <button className=''>Sign-up</button>
          </Link>
        </div>
       
      </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;
