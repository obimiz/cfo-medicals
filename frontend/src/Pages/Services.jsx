import React from 'react'
import bg3 from '../Assets/bg3.png'
import servicesimg1 from '../Assets/servicesimg1.png'
import servicesimg2 from '../Assets/servicesimg2.png'
import servicesimg3 from '../Assets/servicesimg3.png'

const Services = () => {
  return (
    <div className='bg-cover bg-center'style={{ backgroundImage: `url(${bg3})` }}>
        <h3 className='text-2xl font-bold text-center'>Our Services</h3>

        
         <div className='grid grid-cols-3 gap- p-10  max-w-6xl mx-auto justify-center rounded '>
            <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto'>
              <img className='h-44 w-72 rounded' src={servicesimg1} alt="" />
              <p className='mt-4 text-left text-black font-medium'>Online Monitoring</p>
              <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
               consectetur adipisicing elit. Earum <br />
              assumenda, commodi obcaecati <br /> 
             </p>   
          </div>
          <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto'>
              <img className='h-44 w-72 rounded' src={servicesimg2} alt="" />
              <p className='mt-4 text-left text-black font-medium'>Mental Health Services</p>
              <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
              consectetur adipisicing elit. Earum <br />
              assumenda, commodi obcaecati <br /> 
              </p>
          </div>
          <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto'>
            <img className='h-44 w-72 rounded' src={servicesimg3} alt="" />
            <p className='mt-4 text-left text-black font-medium'>Preventive and Wellness Services</p>
            <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
          </div>
         
          <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto mt-5'>
            <img className='h-44 w-72 rounded' src={servicesimg1} alt="" />
            <p className='mt-4 text-left text-black font-medium'>Chronic Disease Management</p>
            <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
            
          </div>
          <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto mt-5'>
            <img className='h-44 w-72 rounded' src={servicesimg1} alt="" />
            <p className='mt-4 text-left text-black font-medium'>Pharmaceutical Services</p>
            <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
            
          </div>
          <div className='bg-white p-4 text-center rounded h-80 w-80 mx-auto mt-5'>
            <img className='h-44 w-72 rounded' src={servicesimg1} alt="" />
            <p className='mt-4 text-left text-black font-medium'>Obstetricians and Gynecologists</p>
            <p className='mt-2 text-left from-neutral-50'>Lorem, ipsum dolor sit amet <br /> 
             consectetur adipisicing elit. Earum <br />
             assumenda, commodi obcaecati <br /> 
             </p>
          </div>

           
      
      </div>
    </div>
  )
}

export default Services
