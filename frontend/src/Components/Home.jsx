import React from 'react'
import Hero from './Hero/Hero'
import Ourstory from './OurStory/ourstory';
import Ourservices from './OurServices/Ourservices';
import Emergency from './Emergency/Emergency';
import Ourteam from './Ourteam/Ourteam';
import Testimonials from './Testimonials/Testimonials';
import Newsletter from './Newsletter/Newsletter';





const Home = () => {
  return (
    <div className='px-[px-0]'>
      <Hero />
      <Ourstory />
      <Ourservices />
      <Emergency />
      <Ourteam />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home;
