import React, { useState } from 'react'
import Input from './Input';
import Controls from './Controls';
function Container() {
 // const [value, setvalue]= useState("");
  const [btnValue,setbtnValue ]= useState(0);
  return (
    <div>
        <div className="container d-flex justify-content-center">
            <div className="card shadow col-lg-8 p-3 mt-5">
                <div className="card-header text-center">
                    Calculator
                </div>
                <div className="card-body">
                    <Input input_value={btnValue}/>
                    <Controls set_value={setbtnValue} c_value={btnValue}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container