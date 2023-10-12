import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { login } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import { getItem, setRole, setToken, setemail } from './LocalStorage';

function Login() {
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
 
  const nav = useNavigate();
  // const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };

      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="USER"){
                nav("/admin-dashboard");
              }
             
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
            console.log(token)
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };
  
  return (
    <div className='bodyz'>    
    <div class="box">
    <form className="form" >
          <h2 className='header'>Login</h2>
        <div>
        <input
          type="email"
          className='input'
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          className='input'
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
       </div>
       <div>
         <button className='button' onClick={validate}>Login</button>
         
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


