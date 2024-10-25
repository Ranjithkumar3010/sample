import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Email() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setshowPassword] = useState(true)

    // Or we can use instead of above single line for error handlling
    // const[emailerror,setEmailError]= useState('');
    // const[passworderror,setPasswordError]= useState('');


    const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };
    let valid = true;


    if (email === "") {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (password === "") {
      newErrors.password = 'Password is required';
      toast.error(newErrors.password)
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      toast.error(newErrors.password)
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      toast.success('Submitied successfully')
      console.log('Form submitted successfully');
      window.location.href = '/Dashboard'
    }
  };

  const Visibility = () => {
    setshowPassword(!showPassword)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>

      <div>
        <label>Password:</label>
        <input
          type={showPassword ? "text": "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='button'onClick={Visibility} >showPassword</button>
        {/* <span onClick={Visibility}>
          {}
        </span> */}
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>

      <button type="submit">Submit</button>
      <ToastContainer />

    </form>
  
    </div>
  );
}

export default Email