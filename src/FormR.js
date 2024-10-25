import React, { useState } from 'react'

function FormR() {
    const[email, setEmail]=useState('')
  return (
    <div>
        <form > {/*onSubmit={handleSubmit}*/}
            <div>
                <label>Email</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                
            </div>
        </form>
    </div>
  )
}

export default FormR