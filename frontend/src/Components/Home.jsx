import React from 'react'
import Hero from './Hero/Hero'
import Ourstory from './OurStory/ourstory';
import Ourservices from './OurServices/Ourservices';
import Emergency from './Emergency/Emergency';
import Ourteam from './Ourteam/Ourteam';





const Home = () => {
  return (
    <div className='px-[px-0]'>
      <Hero />
      <Ourstory />
      <Ourservices />
      <Emergency />
      <Ourteam />
    </div>
  )
}

export default Home;
