import React, { useEffect, useState } from 'react'
import { useAppContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { orderService } from '../services/orderService';

function Cart() {

  const {API_URL,cart,setCart,isLogin} = useAppContext()
  const [total , setTotal] = useState(0)
  const router = useNavigate();

useEffect(()=>{

  let tt = 0
  cart.map((item)=>{
    tt += item.qty * item.price;
  })
  setTotal(tt)
  
})


const createOrder = async(values) =>{
  const {result,error} = await orderService.placeorder(values)
  if(result !== null){
    toast.success("Order placed!")
    router('/')
  }
}

  return (
   <>
                                                   <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            
                <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
                </h2>

                {cart.length===0 &&
                <>
                <p class="block mt-2 text-center text-lg font-medium text-gray-900 dark:text-white">Cart is Empty <br/>
                <button onClick={()=>router('/')} type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go to Shopping</button>
                </p>
                </>
                }

                {cart.length!==0 && cart.map((item,index)=>{

                  
                  return (
                    <>
                      <div class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
                    <div class="col-span-12 lg:col-span-2 img box">
                        <img src={item.url} alt="speaker image" class="max-lg:w-full  h-[200px] lg:w-[180px] rounded-lg object-cover"/>
                    </div>
                    <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                        <div class="flex items-center justify-between w-full mb-4">
                            <h5 class="font-manrope font-bold text-2xl leading-9 text-gray-900">{item.name}</h5>
                            <button onClick={()=>{
                              const newData = cart.filter(element=>element!=item)
                              setCart(newData)
                            }} class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                        cx="17" cy="17" r="17" fill="" />
                                    <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                        stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                        <p class="font-normal text-base leading-7 text-gray-500 mb-6">
                            Introducing our sleek round white portable speaker, the epitome of style and sound! Elevate your auditory experience with this compact yet powerful device that delivers crystal-clear audio wherever you go. <a href="javascript:;"
                            class="text-indigo-600">More....</a>
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-4">
                                <button
                                onClick={()=>{
                                  const newCart = [...cart]; // Create a new array
                                  const itemIndex = newCart.findIndex((cartItem) => cartItem === item); // Find the index
                                  if(item.qty > 1){
                                  newCart[itemIndex].qty -= 1; // Increment the quantity
                                  setCart(newCart); // Set the updated cart
                                  }
                               
                                }}
                                    class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                    <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 9.5H13.5" stroke="" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <input type="text" id="number"
                                    class="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                                    value={item.qty} readOnly/>
                                <button
                                  onClick={()=>{
                                    const newCart = [...cart]; // Create a new array
                                    const itemIndex = newCart.findIndex((cartItem) => cartItem === item); // Find the index
                                    if(item.qty < 10){
                                    newCart[itemIndex].qty += 1; // Increment the quantity
                                    setCart(newCart); // Set the updated cart
                                    }
                                  }}
                                    class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                    <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" stroke-width="1.6"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">{item.price * item.qty}</h6>
                        </div>
                    </div>
                </div>


                    </>
                  
                  )
                })}
               



             {cart.length !== 0 &&
             <>
             

                <Formik enableReinitialize initialValues={{method:'cash',address:'',comment:'',cart:cart,payable:total }} 
                validationSchema={Yup.object({  
                  address : Yup.string().required(),
                  method:Yup.string().required(),
                  cart : Yup.array().min(1).required()
                })}

                onSubmit={(value)=>{

                  value.items = [];
                  value.cart.forEach(element => {
                      const item = {
                        product : element._id,
                        price : element.price,
                        qty : element.qty
                      }
                      value.items.push(item)
                  });

                  createOrder(value)
                }}
                >
                  <Form>

                 
             <div class="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                    <h5 class="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Subtotal</h5>

                    <div class="flex items-center justify-between gap-5 ">
                        {/* <button
                            class="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">Promo
                            Code?</button> */}
                        <h6 class="font-manrope font-bold text-3xl lead-10 text-indigo-600">{
                          
                       total
                        }</h6>
                    </div>
                </div>
                <label for="countries" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select Method</label>
                <Field name="method" as="select" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={"cash"}>Cash</option>
                    <option value={"cheque"}>Cheque</option>
                </Field>
                <ErrorMessage name='method' className='text-red-500' component={"div"} />
                <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Address</label>
                <Field name="address" as="textarea" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  </Field>
                  <ErrorMessage name='address' className='text-red-500' component={"div"} />
                  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Notes</label>
                <Field name="comment" as="textarea" class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  </Field>

                <div class="max-lg:max-w-lg max-lg:mx-auto mt-5">
                    {/* <p class="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Shipping taxes, and discounts
                        calculated
                        at checkout</p> */}
                       
                    {isLogin ? 
                    <button type='submit'
                        class="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">Place Order</button>
                    
                    :
                    <button type='button' onClick={()=>router('/login')}
                    class="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">Login to Proceed</button>
              
                      }
                </div>
                </Form>
                </Formik>
 
             </>
             
             }




                
            
        </div>
        
        
    </section>
                                            
   </>
  )
}

export default Cart