import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {

  const [currentState, setCurrentState] = useState('Sign up')

  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className='login-popup-input'>
          {
            currentState === "Login" ? <></> : <input type="text" placeholder='Enter Your Name' required />
          }
          <input type="email" placeholder='Enter Your Email' required />
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <button>{currentState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {
          currentState === 'Login' ? <p>Create a new account? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p> : <p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
