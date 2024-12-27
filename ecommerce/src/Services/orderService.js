import axios from "axios";
import { toast } from "react-toastify";

const API_URL= import.meta.env.VITE_API_URL

export class orderService{

    static  async  placeorder(values){
        let result = null;
        let error = null;
        const token = localStorage.getItem('token')
        await axios.post(API_URL+'order', values, 
            {
              headers: { authorization: `Bearer ${token}` }  // Pass headers with Bearer token
            })
        .then((res)=>{
            result = res;
            return;
        })
        .catch((err)=>{
            error = err.message;
            toast.error(err.message)
            return;
        })
        
        return {result,error};
    }

    static  async  getOrderByUser(){

        let result = null;
        let error = null;
        const token = localStorage.getItem('token')
        await axios.get(API_URL+'order/filter',
            {
              headers: { authorization: `Bearer ${token}` }  // Pass headers with Bearer token
            })
        .then((res)=>{
            result = res;
            return;
        })
        .catch((err)=>{
            error = err.message;
            toast.error(err.message)
            return;
        })
        
        return {result,error};

    }

}