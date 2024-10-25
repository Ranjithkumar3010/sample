import React, { useState } from 'react'

function LoginAlert() {
    const [name , setName] = useState('')

    const handleSubmit = () =>{
        if(name === ''){
            alert('Please enter your name')
        }

    }
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input type="text"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default LoginAlert