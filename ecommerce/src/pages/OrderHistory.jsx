import React, { useEffect, useState } from 'react'
import { useAppContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { orderService } from '../services/orderService';

function OrderHistory() {

  const {API_URL,cart,setCart,isLogin} = useAppContext()
  
  const router = useNavigate();

  const [orders , setOrders] = useState([])
  const getOrderHistory = async () => {
    const {result,error} = await orderService.getOrderByUser();
    if(result !== null){
      console.log(result.data.data);
      setOrders(result.data.data);
    }
  }

  useEffect(()=>{
    getOrderHistory()
  },[])



  return (
   <>
                                                   <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            
                <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Order History
                </h2>


            


                <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Order Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Items
                </th>
                <th scope="col" class="px-6 py-3">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Items
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment Method
                </th>
                <th scope="col" class="px-6 py-3">
                    Payable Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>

            {orders.map((item,index)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.created_at}
                </th>
                <td class="px-6 py-4">
                  <ul className='list-disc'>
                    {item.items.map((rec,index)=>(
                        <li>{rec.product.name} ({rec.qty}) ({rec.qty*rec.price})</li>
                    ))}
                    </ul>
                </td>
                <td class="px-6 py-4">
                    {item.address}
                </td>
                <td class="px-6 py-4">
                    {item.items.length}
                </td>
                <td class="px-6 py-4">
                    {item.method}
                </td>
                <th scope="col" class="px-6 py-3">
                    {item.payable.toFixed(2)}
                </th>
                <td class="px-6 py-4">
                    {item.status}
                </td>
            </tr>
            ))}
         


        </tbody>
    </table>
</div>







                
            
        </div>
        
        
    </section>
                                            
   </>
  )
}

export default OrderHistory