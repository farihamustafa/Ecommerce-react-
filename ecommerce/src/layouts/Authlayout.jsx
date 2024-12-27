import React, { useEffect } from 'react'
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../App';
import Fnavbar from '../components/Fnavbar';
import Ffooter from '../components/Ffooter';
const Token = localStorage.getItem('token');

function Authlayout(props) {
    const {children} = props;
    const navigate = useNavigate();


    useEffect(() => {
      const verifyToken = async () => {
    
        if (!Token) {

          navigate('/login');
        } else {
          const { result, error } = await authService.verify(Token);
          if (error) {

            navigate('/login');
          }
        }
      };
  
      verifyToken();
    }, []);
  


  return (
    <>
    <Fnavbar/>
    {children}
    <Ffooter/>
    </>
  )
}

export default Authlayout