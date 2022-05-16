import React, { useState } from 'react'

const Profile = () => {
   var [name,setName]=useState("")
   const changeName=()=>{
       setName(
           name="appu"
       )
   }
  return (
    <div>Logged in as {name}
    <button onClick={changeName} className='btn-success'>Login</button>
    </div>
  )
}

export default Profile