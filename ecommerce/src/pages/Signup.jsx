import React from 'react'

function Signup() {
  return (
    <div class="bg-sky-100 flex justify-center items-center h-screen">
   
  
    
    <div class= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Create an account</h1>
      <form action="#" method="POST">
       
        <div class="mb-4 bg-sky-100">
          <label class="block text-gray-600">Name</label>
          <input type="text"  name="name" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
        <div class="mb-4 bg-sky-100">
          <label class="block text-gray-600">Email</label>
          <input type="email"  name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-800">Password</label>
          <input type="password"  name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
        </div>
    
      
        {/* <div class="mb-6 text-blue-500">
          <a href="#" class="hover:underline">Forgot Password?</a>
        </div> */}
      
        <button type="submit" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Submit</button>
      </form>
    
      <div class="mt-6 text-green-500 text-center">
        <a href="#" class="hover:underline">Sign up Here</a>
      </div>
    </div>
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" class="object-cover w-full h-full"/>
    </div>
    </div>
  )
}

export default Signup
