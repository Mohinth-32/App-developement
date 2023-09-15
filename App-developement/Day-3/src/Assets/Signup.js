import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      nav("/");
    }
  };

  return (
    <div className='body'>
      <div className='box'>
      
      <form className='form'>
      <h2 className='header'>Signup</h2>
        <div>
          <input
            type="text"
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
          <h5>{errors.name && <span>{errors.name}</span>}</h5>
        </div>
        <div>
          <input
            type="email"
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <h5>{errors.email && <span>{errors.email}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
         <h5> {errors.password && <span>{errors.password}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <h5>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h5>
        </div>
        <button onClick={handleSubmit} className='button' >Login</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
