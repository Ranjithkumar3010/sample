import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './Login.scss'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { DiRuby } from "react-icons/di";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({email:'' ,password:''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newError = {email:'' ,password:''};
    let valid = true;

    if(email === ""){
      newError.email = "E-mail is required"
      valid = false;
    }
    if(password === ""){
      newError.password = "Password is required"
      valid = false
    }else if(password.length < 6){
      newError.password = "Password must be alteas 6 characters long"
      valid = false
    }
    setError(newError);

    if(valid){
      if(email === "a@gmail.com" && password === '123456'){
      toast.success('Successfully submited')
      setTimeout( ()=>{window.location.href='/Dashboard'},2000 )
      // console.log('Form submitted successfully');
      // window.location.href = '/Dashboard';
    }else{
      // toast.error("Invalid email or password", {
      //   // icon: false,
      //   icon:<DiAndroid />
      // });
      toast.error('errorrrrrrrrrrrrr',{icon:<DiRuby />})
    }

  }
}

  return (
    <form className='main' onSubmit={handleSubmit}>
      <div className='container'>
        <h2 className='h2'>Login</h2>

        <input className='input' type='email' placeholder='Email ID'
          value={email} onChange={(e)=>setEmail(e.target.value)} ></input><br></br>

          <span style={{color:'red'}}>{error.email}</span>

        <input className='input' type='password' placeholder='Password'
        value={password} onChange={(e)=>setPassword(e.target.value)} required></input><br></br>

          <span style={{color:'red'}}>{error.password}</span>  

        <button className='button' type='submit'> <span className='span'>Submit</span> </button>
      </div>
      <ToastContainer/>
      {/* <ToastContainer icon={false}/> */}
    </form>
  )
}

export default Login