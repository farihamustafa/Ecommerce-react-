import React from 'react'
import { useAppContext } from '../App'
import Slider from '../components/Slider'
// import products from '../sample/products'
import { toast } from 'react-toastify'
import Card from '../components/Card'

function Home() {

    const {API_URL,cart,setCart,products} = useAppContext()

  return (
  <>
  
  <Slider/>

    <div className='text-4xl font-bold flex justify-center my-5'>Product</div>

  <div class="grid grid-cols-4 gap-4 p-10">
      {products.map((product)=>(
        <Card name={product.name} price={product.price} img={product.url} desc={product.description}
        onClick={()=>{
          const exist = cart.includes(product);
          if(exist){
            toast.error(product.name +" already exist in Cart!")
            return;
          }
          setCart([...cart,product])
          toast.success(product.name +" Add to Cart!")
        }}
        />
      ))}
</div>
  
  </>
  )
}

export default Home