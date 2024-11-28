import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
const authservice = new authService();
function Signup() {
  const router = useNavigate();
  const [error , setError] = useState([]);
  return (
    <div class="bg-sky-100 flex justify-center items-center h-screen">

   
    
    <div class= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Create an account</h1>
      <Formik
      initialValues={{name:'',email:'',password:''}}
      validationSchema={Yup.object({
        name:Yup.string().required(),
        email:Yup.string().email().required(),
        password:Yup.string().required()
      })}

      onSubmit={async(values)=>{
        const response =  await  authservice.register(values);
        setError(response.error || []);

        if(response.result !== null){
          toast.success("Account created!")
          router('/login')
        }
      }}
      >    
      <Form>
      {error.length > 0 &&
        <div className='bg-red-300 p-5 w-full my-2 rounded'>  
            <ul className='list-disc px-5'>
              {error.length > 0 && error.map((err)=>(
                <li>{err.msg}</li>
              ))}
            </ul>
        </div>
        }
    
        <div class="mb-4 bg-sky-100">
          <label  class="block text-gray-600">Name</label>
          <Field type="text"  name="name" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
          <ErrorMessage name='name' className='text-red-500' component={'div'} />
        </div>

        <div class="mb-4 bg-sky-100">
          <label  class="block text-gray-600">Email</label>
          <Field type="email"  name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
          <ErrorMessage name='email' className='text-red-500' component={'div'} />
        </div>
    
        <div class="mb-4">
          <label for="password" class="block text-gray-800">Password</label>
          <Field type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
          <ErrorMessage name='password' className='text-red-500' component={'div'} />
        </div>
        
     
        
        {/* <div class="mb-6 text-blue-500">
          <a href="#" class="hover:underline">Forgot Password?</a>
        </div> */}
    
        <button type="submit" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Submit</button>
      </Form>

      </Formik>
      <div class="mt-6 text-green-500 text-center">
        <Link to={'/login'} class="hover:underline">Login here</Link>
      </div>
    </div>

    <div class="w-1/2 h-screen hidden lg:block">
      <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" class="object-cover w-full h-full"/>
    </div>
    </div>
  )
}

export default Signup