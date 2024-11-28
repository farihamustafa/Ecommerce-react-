import React, { useEffect } from 'react'
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
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
    <div>Authlayout</div>
    {children}
    </>
  )
}

export default Authlayout