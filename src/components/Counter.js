import React, { useState } from 'react'

const Counter = () => {
    
var [number,setNumber]=useState(0)

const incFen = ()=>{
    setNumber(number=number+1)
}

const decFen = ()=>{
    setNumber(number=number-1)
}

return (
    <div className="row">
    <div className="col col-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12">
        <div className="row">
         <div className="col col-12 col-sm-4 col-md-4 col-xl-4 col-xxl-4">
            <label for="" className="form-control">{number}</label>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-xl-4 col-xxl-4">
                <button onClick={incFen} className="btn btn-success">Increment</button>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-xl-4 col-xxl-4">
                <button  onClick={decFen} className="btn btn-danger">Decrement</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Counter