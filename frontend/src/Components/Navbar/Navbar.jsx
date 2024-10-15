import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.jpg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");

  return (
	// Navbar
  
  <nav>
    <div className='h-8 bg-[#2DAF70]'>

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
      <div className='text-white bg-[#00ADEF] rounded-lg'>
          <button className='w-[150px] h-[50px] outline-none text-[22px] font-semibold'>Login</button>
      </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;
