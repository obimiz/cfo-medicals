import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-40 w-[60%] rounded-xl absolute top-[3100px] ml-64  bg-[#00ADEF]'>
	<p className='font-semibold text-l ml-24 text-white mt-6'>Newsletter Subscription</p>
	<div className='flex p-5 justify-around'>
		<div><p className='text-white text-2xl font-semibold'>Subscribe for the <br /> 
		Exclusive Update!</p></div>
		<div className=''>
			<form className='flex-col' action="#" method="POST">
      				<input
        			type="email"
        			name="email"
        			placeholder="Enter your email"
        			class="p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        			required
      					/>
      				<button
        			type="submit"
        			class="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
      				>
        			Subscribe
      				</button>
    			</form>
		</div>
	</div>
      
    </div>
  )
}

export default Newsletter
