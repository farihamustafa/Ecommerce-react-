import React from 'react'
import { useAppContext } from '../App'

function Home() {
    const{API_URL} = useAppContext()
  return (
    <div>
      Home{API_URL}
    </div>
  )
}

export default Home
