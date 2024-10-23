import React from 'react'
import bg3 from '../../Assets/bg3.png'
import Doc3 from '../../Assets/Doc3.png'
import Doc1 from '../../Assets/Doc2.png'
import Doc4 from '../../Assets/Doc4.png'
import Doc2 from '../../Assets/Doc1.png'

const Ourteam = () => {
  return (
    <div
        className="h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg3})` }}>
        <div className='text-center p-4'>
            <p className='font-semibold text-xl text-white mt-8'>Our Team</p>
            <h3 className='text-3xl font-bold mt-6'>Our Medical Services</h3>
        </div>

        <div className='grid grid-cols-4 gap-0.5 p-10 max-w-4xl mx-auto justify-center rounded'>
          <div><img className='rounded-md w-48 h-48 text-center bg-white' src={Doc2} alt="" />
            <div className='bg-[#2DAF70] h-14 w-48 p-1 rounded'> 
              <p className='ml-2 text-white'>Dr. Prisca Obi</p>
              <span className='text-sm ml-2 text-white'>General Practitioner</span>
              </div>
          </div>
          <div><img className='rounded-md w-48 h-48 bg-white' src={Doc1} alt="" />
            <div className='bg-[#00ADEF] h-14 w-48 rounded'>
              <p className='text-white ml-2'>Dr. Philip Tunder</p>
              <span className='text-white ml-2'>Cardiologist</span>
              {/* <span className='w-32 h-9 bg-[#00ADEF] rounded-full absolute top-[2500px]'>social media</span> */}
              </div>
          </div>
          <div><img className='rounded-md w-48 h-48 bg-white' src={Doc3} alt="" />
            <div className='bg-[#2DAF70] h-14 w-48 rounded'>
              <p className='ml-2 text-white'>Dr. Kingsley Mulla</p>
              <span className='ml-2 text-white'>Dermatologist</span>
            </div>
          </div>
          <div><img className='rounded-md w-48 h-48 bg-white' src={Doc4} alt="" />
              <div className='bg-[#2DAF70] h-14 w-48 rounded'>
                <p className='ml-2 text-white'>Dr. Irene Fashola</p>
                <span className='ml-2 text-white'>Pediatrician</span>
               
                </div>
          </div>
            
        </div>
    </div>
  
  )
}

export default Ourteam
