import React from 'react'
import bg3 from '../../Assets/bg3.png'
import servicesimg1 from '../../Assets/servicesimg1.png'
import servicesimg2 from '../../Assets/servicesimg2.png'
import servicesimg3 from '../../Assets/servicesimg3.png'

const Ourservices = () => {
  return (
    <div className='h-[80vh] bg-cover bg-center' style={{ backgroundImage: `url(${bg3})` }}>
      <div className='text-center p-4'>
        <p className='font-semibold text-white'>Our Services</p>
        <h3 className='text-3xl font-bold mt-2'>Our Medical Services</h3>
      </div>

      <div class="grid grid-cols-3 gap-0.5 p-10  max-w-6xl mx-auto justify-center rounded">
        <div class="bg-white p-4 text-center rounded h-80 w-80 mx-auto">
          <img className='h-44 w-72 rounded' src={servicesimg1} alt="" />
          <p className='mt-4 text-left text-black font-medium'>Online Monitoring</p>
          <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
          </div>
        <div class="bg-white p-4 text-center rounded h-80 w-80 mx-auto">
          <img className='h-44 w-72 rounded' src={servicesimg2} alt="" />
          <p className='mt-4 text-left text-black font-medium'>Holter Heart Surgery</p>
          <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
          </div>
        <div class="bg-white p-4 text-center rounded h-80 w-80 mx-auto">
          <img className='h-44 w-72 rounded' src={servicesimg3} alt="" />
          <p className='mt-4 text-left text-black font-medium'>Diagnosis & Research</p>
          <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
          </div>
</div>
	


      
   
	
    </div>
  )
}

export default Ourservices;
