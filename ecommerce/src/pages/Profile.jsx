import React from 'react'
import { userService } from '../Services/userService'
const userservice = new userService()
function Profile() {
  const getuserdata= async()=>{
    const response = await userservice.getUser()
    console.log(response)
  }
  return (<>
    <div>
      Profile
    </div>
    <button onClick={()=>getuserdata()}>Get User</button>
    </>
  )
}

export default Profile
                                  