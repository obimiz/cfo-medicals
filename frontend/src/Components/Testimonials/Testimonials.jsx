import React from 'react'
import reviewimg1 from '../../Assets/reviewimg1.jpg'
import reviewimg2 from '../../Assets/reviewimg2.jpg'
import reviewimg4 from '../../Assets/reviewimg4.jpeg'

const Testimonials = () => {
  return (
    <div className='h-[80vh] px-[60px] items-center justify-center bg-[#F5F5F5]'>
	<div className='text-center p-4'>
            <p className='font-semibold text-xl text-[#00ADEF] mt-8'>Testimonial</p>
            <h3 className='text-3xl font-bold mt-6'>What Our Customers are Saying</h3>
        </div>

	<div className='flex gap-5 justify-center rounded p-16 mt-[-20px]'>
		<div className='bg-white rounded-md w-72 h-52 text-center'>
			<p className='text-left p-4 mt-10'>Lorem ipsum dolor sit amet<br />
			   Unde maxime, debitis aperiam et,<br /> 
			   nisi voluptas nobis sunt maio</p>
			   <div className='flex'>
			   <img className="h-12 w-12 rounded-full ml-3" src={reviewimg1} alt="" />
			   <div className='ml-5 mt-1'>
			   <p className='text-l font-semibold'>Biodun Pascal</p>
			   <span className='ml-[-38px] text-sm'>Customer</span>
			   </div>
			   
			   </div>
			  
			</div>
		<div className='bg-white rounded-md w-72 h-52 text-center'>
			<p className='text-left p-4 mt-10'>Lorem ipsum dolor sit amet<br />
			   Unde maxime, debitis aperiam et,<br /> 
			   nisi voluptas nobis sunt maio</p>
			   <div className='flex'>
			   <img className='h-12 w-12 rounded-full ml-3' src={reviewimg2} alt="" />
			   <div className='ml-5 mt-1'>
			   <p className='text-l font-semibold'>Biodun Pascal</p>
			   <span className='ml-[-38px] text-sm'>Customer</span>
			   </div>
			   </div>
			
			</div>
		<div className='bg-white rounded-md w-72 h-52 text-center'>
			<p className='text-left p-4 mt-10'>Lorem ipsum dolor sit amet<br />
			   Unde maxime, debitis aperiam et,<br /> 
			   nisi voluptas nobis sunt maio</p>
			   <div className='flex'>
			   <img className='h-12 w-12 rounded-full ml-3' src={reviewimg4} alt="" />
			   <div className='ml-5 mt-1'>
			   	<p className='text-l font-semibold'>Biodun Pascal</p>
			   	<span className='ml-[-38px] text-sm'>Customer</span>
			   </div>
			   </div>
			
			</div>
	</div>
      
    </div>
  )
}

export default Testimonials;
