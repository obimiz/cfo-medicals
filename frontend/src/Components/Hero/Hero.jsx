import React from 'react'
// import backgroundImage from '../Assets/backgroundimage.jpg'
import heroBg from '../../Assets/heroBg.jpg'
// import heroBg2 from '../Assets/heroBg2.jpg'
import heroimg from '../../Assets/heroimg.png'
// import headset from '../Assets/Headset.png'

const Hero = () => {
  return (
    <div className='hero px-[60px] mt-auto h-[94vh] bg-cover bg-center flex' 
    style={{ backgroundImage: `url(${heroBg})` }}>
	
      <div className="hero-left w-1/2">

      <p className='mt-28 text-black text-xl font-bold'>Welcome to CFO Clinics</p>

	<h3 className='text-5xl mt-3 font-bold text-gray-800 text-[60px]'>We Are Committed <br /> To Your Health</h3>

	<p className='mt-4 font-semibold text-white text-xl'>At our clinic, we prioritize compassionate, personalized care to help you 
	achieve optimal health and well-being. Our team of experienced doctors, nurses, 
	</p>

	<button className='bg-[#00ADEF] w-[170px] h-[50px] rounded-md outline-none text-[20px] font-semibold text-white mt-8'>Meet A Doctor</button>
  <div className='flex gap-10 font-bold text-[20px] text-start mt-8'>
    <p>355 k+ <br />
      Recovered Patient</p>
    <p>98% <br />
    Good Reviews</p>
    <p>120+ <br />
     <span className='font-normal text-base mt-5'>Popular Doctors</span> 
    </p>
  </div>

      </div>

      <div className="hero-right px-[30px] w-1/2">
	      <img className='h-[540px] mt-10 w-auto ml-16' src={heroimg} alt="hero" />
        <div className='h-12 w-40 rounded mt-[-220px] ml-2 bg-white absolute'></div>

      </div>
    </div>
  )
}

export default Hero
