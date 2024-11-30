import axios from "axios";
import { toast } from "react-toastify";

const API_URL= import.meta.env.VITE_API_URL

export class authService{

   async register(values){

    let result = null;
    let error = null;

       await axios.post(API_URL+'auth/register',values)
        .then((res)=>{
            result = res;
            return;
        })
        .catch((err)=>{
            error = err?.response?.data?.errors || err.message;
            toast.error(err.message)
            return;
        })

        return {result,error};

    }

    
   async login(values){

    let result = null;
    let error = null;

       await axios.post(API_URL+'auth/login',values)
        .then((res)=>{
            result = res;
            localStorage.setItem('token',res.data.token)
            return;
        })
        .catch((err)=>{
            error = err?.response?.data?.message || err.message;
            toast.error(error)
            return;
        })

        return {result,error};

    }

    static  async  verify(token){
        let result = null;
        let error = null;
        
        await axios.post(API_URL+'auth/verify', {}, 
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
    static async logout(token){
        await axios.post(API_URL+'auth/logout',{},{
            headers: {authorization: `Bearer ${token}`}
        });
        localStorage.clear()

    }



}