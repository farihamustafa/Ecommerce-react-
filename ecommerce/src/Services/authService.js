import axios from "axios";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL
export class authService{
    async register(values){
        let result = null;
        let error = null;
        await axios.post(API_URL+'auth/register', values).then((res)=>{
            result = res;
            return
        })
        .catch((err)=>{
            error= err?.response?.data?.errors || err.message;
            toast.error(err.message)
            return;
        })
        return(result,error);
    }
}