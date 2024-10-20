// LoginForm.jsx
import React, { useState } from 'react';
import loginimg from '../../Assets/loginimg.png'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
    // Here you would add logic to authenticate the user, such as sending the data to an API
  };

  return (
	<div className='w-[90vh] h-[75vh] bg-[#F5F5F5] mt-5 ml-[380px] rounded-md'>
		<img className='ml-48 w-44 mt-5' src={loginimg} alt="" />
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4">
     <h3 className='font-bold text-3xl mt-[-30px]'>LOGIN</h3>
     <p>Already Registered? <span className='font-bold'>Login here!</span></p>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-lg p-2 w-72 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

     
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border border-gray-300 rounded-lg p-2 w-72 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="bg-[#00ADEF] w-28 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Login
      </button>
      
    </form>
    <p className='text-center'>Don't have an account? <span className='font-bold'>Sign-up</span></p>
    </div>
  );
};

export default LoginForm;
