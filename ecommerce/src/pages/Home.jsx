import React from 'react'
import { useAppContext } from '../App'
import Slider from '../components/Slider'


function Home() {
    const{API_URL} = useAppContext()
  return (
    <div>
   

  <Slider/>
    </div>
  )
}

export default Home
