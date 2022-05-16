import React, { useState } from 'react'


const Student = () => {
  var [name,setName]=useState("Rahul")
  var [age,setAge]=useState("32")
  var [College,setCollege]=useState("MZC")

  
  const changeName=  () => {
    setName(
      name="akku"
    )
    setAge(
      age="35"
    )
    setCollege(
      College="st thomas"
    )
  }
  
  


  return (
    
    
    <div class="row g-2">
    <div class="col col-12 col-sm-12 col-xl-12 col-xxl-12 col-lg-12 col-md-12">
        <div class="row g-4">
            <div class="col col-12 col-md-6 col-sm-6 col-xl-6 col-xxl-6">
                <label for="Name" class="label-control">Name</label>  
                
              </div>
                <div class="col col-12 col-md-6 col-sm-6 col-xl-6 col-xxl-6">
                <label for="Rahul" class="label-control">{name}</label>
                
                </div>
                <div class="col col-12 col-md-6 col-sm-6 col-xl-6 col-xxl-6">
            <label for="Age" class="label-control">Age</label>
                 </div>
            <div class="col col-12 col-md-6 col-sm-6 col-xl-6 col-xxl-6">
            <label for="Age" class="label-control">{age}</label>
                 </div>
                
              
  
            <div class="col col-12 col-sm-12 col-xl-12 col-xxl-12 col-lg-12 col-md-12">
           <label for="College" class="label-control">College</label>
                </div>
                <div class="col col-12 col-sm-12 col-xl-12 col-xxl-12 col-lg-12 col-md-12">
           <label for="College" class="label-control">{College}</label>
                </div>
                <div class="col col-12 col-sm-6 col-xl-6 col-xxl-6 col-lg-6 col-md-6">   
                <button onClick={changeName} className='btn-success'>login</button>          

        </div>
    </div>
</div>
</div>
  )
}

export default Student