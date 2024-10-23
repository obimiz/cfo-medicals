import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);

  const toggleLoginDropdown = () => {
    setIsOpenLogin(!isOpenLogin);
    setIsOpenSignup(false); // Close the other dropdown if open
  };

  const toggleSignupDropdown = () => {
    setIsOpenSignup(!isOpenSignup);
    setIsOpenLogin(false); // Close the other dropdown if open
  };

  return (
	// Navbar
  
  <nav className='sticky top-0 z-10'>
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
       <ul className='Login/signup flex justify-between gap-3'>
          <li> 
            <Link to="/Bookanappointment">
            <button className='bg-[#2DAF70] w-48 rounded-lg h-10 text-white font-semibold text-[18px] p-1'>Book Appointment</button>
            </Link>
            </li>

            {/*Login Dropdown*/}
            <li className=''>
            
            <button className='w-32 shadow-black rounded-lg h-10 text-white font-semibold text-[18px] p-1 bg-[#00ADEF]' onClick={toggleLoginDropdown}>
              Login
              </button>
              {isOpenLogin && (
                <ul className='absolute bg-white w-44 h-32 rounded-md p-5 mt-10 leading-10'>
                    <li>
                      <Link className='font-medium hover:text-[#00ADEF] hover:underline' to="/DoctorLogin">Login for Doctor</Link>
                    </li>

                    <li>
                          <Link className='font-medium hover:text-[#00ADEF] hover:underline' to="/PatientLogin">Login for Patient</Link>
                    </li>
                </ul>
              )}
            
          </li>

          {/*Sign-up Dropdown*/}
          <li className='relative'>
            <button className='w-32 shadow-black rounded-lg h-10 text-white font-semibold text-[18px] p-1 bg-[#00ADEF]' onClick={toggleSignupDropdown}>Signup</button>
            {isOpenSignup && (
                <ul className='absolute bg-white w-44 h-32 rounded-md p-5 mt-10 leading-10 '>
                  <li>
                     <Link className='font-medium hover:text-[#00ADEF] hover:underline' to={"DoctorSignup"}>Signup for Doctor</Link>
                  </li>

                  <li>
                    <Link className='font-medium hover:text-[#00ADEF] hover:underline' to={"PatientSignup"}> Signup for Patient</Link>
                  </li>

                </ul>
            )}
            
          </li>

        </ul>
       
       
       
      </div>
    </div>
    
    </nav>
  )
}

export default Navbar;
