import { useState,createContext, useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Authlayout from './layouts/Authlayout'
import Guestlayout from './layouts/Guestlayout'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { jwtDecode } from "jwt-decode";
import { productService } from './services/productService'
import OrderHistory from './pages/OrderHistory'


const AppContext = createContext();

export function useAppContext(){
  return useContext(AppContext);
}

const API_URL= import.meta.env.VITE_API_URL

const productservice = new productService()

function App() {

  const [cart,setCart] = useState([])
  const [isLogin,setIsLogin] = useState(false)
  const [userDetail,setUserDetail] = useState( localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : {} )
  const [products,setProducts] = useState([])

  const getproductdata = async()=>{
    const response = await productservice.getProduct()
    // console.log(response.result.data.data || [])
    if(response.result !== null){
     setProducts(response.result.data.data || [])
    }
 }

 useEffect(()=>{
  getproductdata()
 },[])
  

  return (
    <>
      <ToastContainer />
      <AppContext.Provider value={{cart,setCart,API_URL,isLogin,setIsLogin,userDetail,setUserDetail,products}}  >
        <BrowserRouter>
          {/* AUTH */}
          <Routes>
              <Route path='/checkout' element={<Authlayout><Checkout/></Authlayout>}  />
              <Route path='/profile' element={<Authlayout><Profile/></Authlayout>}  />
              <Route path='/orderhistory' element={<Authlayout><OrderHistory/></Authlayout>}  />
          </Routes>
          {/* GUEST */}
          <Routes>
              <Route path='' element={<Guestlayout><Home/></Guestlayout>} />
              <Route path='/about' element={<Guestlayout><About/></Guestlayout>} />
              <Route path='/cart' element={<Guestlayout><Cart/></Guestlayout>} />
              <Route path='/shop' element={<Guestlayout><Shop/></Guestlayout>} />
              <Route path='/login' element={<Guestlayout><Login/></Guestlayout>} />
              <Route path='/signup' element={<Guestlayout><Signup/></Guestlayout>} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App
