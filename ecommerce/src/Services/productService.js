import axios from "axios";
import { toast } from "react-toastify";

const API_URL= import.meta.env.VITE_API_URL

export class productService{

   async getProduct(){

    let result = null;
    let error = null;

       await axios.get(API_URL+'product',{})
        .then((res)=>{
            result = res;
            return;
        })
        .catch((err)=>{
            error = err.message
            toast.error(error)
            return;
        })
        return {result,error};
    }

}