import React from 'react'
import ourstory1 from '../../Assets/ourstory1.jpg'
import ourstory2img from '../../Assets/ourstory2img.jpg'
import bullet from '../../Assets/bullet.png'
import horizontalline from '../../Assets/horizontalline.png'

const Ourstory = () => {
  return (
    <div className='h-[80vh] px-[60px] flex items-center justify-center bg-[#F5F5F5]'>
      <div className="ourstory-left w-1/2 flex">
      <img className='w-[350px] h-[250px] mt-[-130px] ml-[-60px] rounded' src={ourstory2img} alt="" />
      <img className='w-[250px] h-[280px] left-[400px] mt-[-20px] absolute rounded' src={ourstory1} alt="" />

      </div>


      <div className="ourstory-right w-1/2 mr-[-130px] mt-5">
      <div className='flex gap-4 items-center'>
        <img className='h-4 w-1' src={horizontalline} alt="" />
        <p className='font-semibold text-[#00ADEF]'>About Us</p>
      </div>
     
        <h2 className='text-2xl font-semibold mt-5'>The Great Place of Medical <br /> Hospital Center. </h2> <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti <br />
           repellendus facilis quod id delectus ea ipsam tenetur earum atque rerum <br />
           ullam voluptate, maxime deserunt nulla inventore, amet vitae sint.</p>

           <div className='flex mt-2 gap-16'>
            <ul>
            <li className="list-none before:content-[''] before:inline-block before:mr-2 text-l leading-8 font-medium">
            <span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
                  Ambulance Services</li>

              <li className="list-none before:content-[''] before:inline-block before:mr-2 text-l font-medium leading-8">
              <span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
                Phamacy on Clinic</li>
              <li className="list-none before:content-[''] before:inline-block before:mr-2 text-l font-medium leading-8">
              <span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
                24/7 Medical Emmgerncy</li>
            </ul>
            <ul>
            <li className="list-none before:content-[''] before:inline-block before:mr-2 text-l font-medium leading-8">
            <span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
            Oxizen on Wheel</li>
            <li className="list-none before:content-[''] before:inline-block before:mr-2 text-l font-medium leading-8">
            <span className="inline-block w-5 h-5 bg-no-repeat bg-center bg-cover mr-2" style={{ backgroundImage: `url(${bullet})` }}></span>
              On duty Doctors</li>
            </ul>
           
           </div>
           <button className='bg-[#00ADEF] rounded-md outline-none text-[20px] font-semibold text-white mt-8 justify-center texts-center py-2 px-4'>Discover More</button>

           
      </div>
      
    </div>
  )
}

export default Ourstory;
