import React from 'react'

const Register = () => {
  return (
    <div>
      
      <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                 <label for="Name" className="form-label">Name</label>
                 <input placeholder="Enter name" type="text" className="form-control"/>
                 
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="Rollno" className="form-label">Rollno</label>
                  <input placeholder="Enter Rollno" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="AdmissionNo" className="form-label">AdmissionNo</label>
                  <input placeholder="Enter AdmissionNo" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6"> 
                     <label for="MobileNo" className="form-label">MobileNo</label>
                  <input placeholder="Enter MobileNo" type="text" className="form-control"/></div>
                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label for="College" className="form-label">College</label>
                  <input placeholder="Enter College name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="UserName" className="form-label">UserName</label>
                  <input placeholder="Enter Username" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="Password" className="form-label">Password</label>
                  <input placeholder="Enter Password" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="Confirm Password" className="form-label">Confirm Password</label>
                    <input placeholder="Enter confirm Password" type="text" className="form-control"/>
                  </div>
                <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">Register</button>
                
            </div>
            </div>
        </div>
    </div>
</div> 
        r</div>
  )
}

export default Register