import React from 'react'

function Input(props) {
  return (
    <div>
        <input value={props.input_value} type="text" className='form-control in' />
    </div>
  )
}

export default Input