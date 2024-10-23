import React from 'react'
import cfologo from '../../Assets/cfologo.png'




const Footer = () => {
  return (
    <div className=''>
	<div className='h-[80vh] px-[60px] items-center bg-[#051F37] flex justify-around'>
	
		<div className='mt-20'>
		<img className='h-10 w-auto' src={cfologo} alt="" />
		<p className='text-white mt-5 leading-5'>Lorem ipsum dolor sit amet <br />
		   consectetur adipisicing elit.</p>
		   <p className='text-white text-xs leading-[2]'>Hello to: @support@gmail.com</p>
		   <span className='text-white'>Follow: </span>
		</div>
		<div className='mt-20'>
		<h3 className='text-white text-xl mb-5'>Company</h3>
		<p className='text-white text-xs leading-[2]'>Home <br /> About <br /> Services <br /> Contact <br /> Book Appointment</p>
		</div>
		<div className='mt-20'>
		<h3 className='text-white text-xl mb-7'>Important</h3>
		<p className='text-white text-xs leading-[2]'>Our Process <br /> Appointment <br /> FAQ <br /> 
		Privacy Policy <br /> Terms & Conditions</p>
		</div>
		<div className='mt-20'> 
		<h3 className='text-white text-xl mb-7'>Quick Link</h3>
		<p className='text-white text-xs leading-[2]'>Why Choose Us <br /> Pricing Plan <br /> 
		News & Article <br /> Login <br /> Subscribe</p>
		</div>
		<div className='mt-20'>
			<h3 className='text-white text-xl mb-12'>Official Info</h3>
			<p className='text-white text-xs mb-5 leading-[2]'>
			25 Aina road, Mushin, Abuja. <br />
			company@gmail.com <br />
			+7030616145
			</p>
			</div>
		</div>

		<div>
			<hr className='border-t-6 w-3/4 mx-auto mb-[-50px]' />
			<div className='flex justify-around gap-72'>
				<p className='text-white'>@2024 All rights reserved</p>
				<ul className='flex gap-10'>
					<li className='text-white'>Terms and Conditions</li>
					<li className='text-white'>Cookies</li>
					<li className='text-white'>Privacy policy</li>
				</ul>
			</div>
		</div>
	
      
    </div>
  )
}

export default Footer
