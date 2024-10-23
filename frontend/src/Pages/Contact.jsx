// src/pages/Contact.js
import React, { useState } from 'react';
import bg3 from '../Assets/bg3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg3})` }}>
      <header>
        <h1 className="text-4xl  font-bold text-gray-800  text-center">Contact Us</h1>
    
      </header>

      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00ADEF] text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-2 rounded-lg w-[520px] h-16 bg-white shadow-2xl ml-[415px]">
      <div className='flex gap-6 mt-5 p-2 ml-12'>
		<div className='w-40 h-12 bg-[#00ADEF] rounded-md'>
			<p className='text-white font-medium text-sm p-3 ml-3'>
			<FontAwesomeIcon icon={faPhone} className="text-base mr-2" /> 
			07030616155</p>
		</div>
		<div className='w-52 p-3 h-12 bg-[#00ADEF] rounded-md'>
			<p className='text-white text-sm font-medium'>
			<FontAwesomeIcon icon={faEnvelope} className="text-white mr-2 text-base" />
			 info@cfomedicals.com</p>
		</div>
		
	   </div>
        
      </div>
    </div>
  );
};

export default Contact;
