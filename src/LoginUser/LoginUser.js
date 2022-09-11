import React from 'react'
import { Link } from "react-router-dom";
import './LoginUser.css';
import img1 from '../Images/query.gif';
function LoginUser() {
  return (
    <div className='login'>
    <div className="login-left">
    <h3>Welcome to the Page</h3>
    </div>
    <div className='logo'>
      <img
        src={img1}
        alt="logo" />
        {/* <button className='botton'>Login</button> */}
        </div>
       
        
        <div className='form'>
            <h2>User Login Form</h2>
            <div className='container'>
           
            <div className='email11'>
                <input type="email" placeholder='Email...' className='email'/>
                </div>
            <div className='passwordd' >
                <input type="password" placeholder='Password...'/>
                {/* <input type="password" placeholder='Confirm Password...'/> */}
            </div>
        <Link to="Quora"><button className='btnn' type='submit'>LOGIN</button></Link> 
            
           
        </div>
        <div className='para'>
        <p>If new User then<Link to="Login"> Register</Link>  </p>
        
        </div>
        </div>
        </div>
  );
}

export default LoginUser