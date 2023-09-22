import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { login } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

   
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 4) {
      validationErrors.password = "Password should be at least 8 characters";
    }
    else{
      dispatch(login(email))
        nav('/admin-dashboard')
    }

    setErrors(validationErrors);

    
    
   
  }

  return (
    <div className='bodyz'>
    <div class="box">
    <form className="form" onSubmit={handleSubmit}>
          <h2 className='header'>Login</h2>
        <div>
        <input
          type="email"
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
      </div>
      <div>
        <input
          type="password"
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
       <h6> {errors.password && <span>{errors.password}</span>}</h6>
       </div>
       <div>
         <button className='button' onClick={handleSubmit}>Login</button>
         
       </div>
          <Link to="/register">
            <p class="group">Signup</p>
          </Link>
        </form>
      </div>
    </div>
    
  );
}

export default Login;


