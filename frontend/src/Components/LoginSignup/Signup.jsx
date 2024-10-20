// SignupForm.jsx
import React, { useState } from 'react';
import signupimg1 from '../../Assets/signupimg.png'

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign-up successful!\nEmail: ${email}\nNname: ${name}`);
    // Add logic here to submit the data to the server for account creation
  };

  return (
	<div className=' flex w-[90vh] h-[75vh] bg-[#F5F5F5] mt-5 ml-[380px] rounded-md'>
<img className='w-64 h-[75vh]' src={signupimg1} alt="" />
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4 mt-8">
	<label htmlFor="name" className="text-lg font-semibold text-left">
  	Name:
</label>
<input
  type="text"
  id="name"
  value={name} // Use 'name' here
  onChange={(e) => setName(e.target.value)} // Update state with 'setName'
  placeholder="Enter your name"
  className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
/>
      <label htmlFor="email" className="text-lg font-semibold">
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      

      <label htmlFor="password" className="text-lg font-semibold">
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="bg-[#00ADEF] w-28 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Sign Up
      </button>
    </form>
    </div>
  );
};

export default SignupForm;
