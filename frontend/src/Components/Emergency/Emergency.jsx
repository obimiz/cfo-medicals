import React from 'react'
import bullet from '../../Assets/bullet.png'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import customercare from '../../Assets/customercare.png'

const Emergency = () => {
  return (
    <div className='h-[80vh] px-[60px] flex items-center justify-center bg-[#F5F5F5]'>
	<div className="em-left">
	<p className='font-semibold text-[#00ADEF]'>Contact</p>
	<h3 className='text-3xl font-bold mt-2'>Need Emergency Contact</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolorum <br />
	   facilis molestiae aspernatur repellat cumque illum amet, nam minus deserunt <br />
	   ab corporis expedita placeat dolores quasi beatae eius enim asperiores.</p>
	   
	   <ul>
		<li className="list-none before:content-[''] before:inline-block before:mr-2 text-l leading-8 font-medium">
		<span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
		24/7 Contact Our Hospital.</li>

		<li className="list-none before:content-[''] before:inline-block before:mr-2 text-l leading-8 font-medium">
		<span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
		24 Hours Open Our Hospital.</li>

		<li className="list-none before:content-[''] before:inline-block before:mr-2 text-l leading-8 font-medium">
		<span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
		Emergency Contact Our Phone Number.</li>
	   </ul>
	   <div className='flex gap-6'>
		<div className='w-40 h-12 bg-[#00ADEF] rounded'>
			<p className='text-white font-medium text-base'text-white font-medium>Phone Number <br />
			<FaPhone color="white" size="24px" /> 07030616155</p>
		</div>
		<div className='w-40 h-12 bg-[#00ADEF] rounded'>
			<p className='text-white font-medium'>Quick Your Mail <br />
			<FaEnvelope /> info@cfomedicals.com</p>
		</div>
		<div></div>
	   </div>
	</div>
	<div className="em-right">
		<img src={customercare} alt="" />
	</div>
      
    </div>
  )
}

export default Emergency
