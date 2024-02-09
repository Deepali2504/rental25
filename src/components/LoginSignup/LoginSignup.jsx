import React, { useState } from 'react'
import './LoginSignup.css'
import { FaUser, FaPhoneSquareAlt, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");
  
    return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
                <FaUser className='Icons'/>
                <input type='text' placeholder='Name'/>
            </div>
            {action==="Login"?<div></div>:<div className="input">
                <FaPhoneSquareAlt className='Icons'/>
                <input type='number' placeholder='Phone Number'/>
            </div>}
            {action==="Login"?<div></div>:<div className="input">
                <FaAddressCard className='Icons'/>
                <input type='text' placeholder='Address'/>
            </div>}
            <div className="input">
                <MdEmail className='Icons'/>
                <input type='email' placeholder='Email-Id'/>
            </div>
            <div className="input">
                <RiLockPasswordFill className='Icons'/>
                <input type='password' placeholder='Password'/>
            </div>
            {action==="Login"?<div></div>:<div className="Checkbox">
                <label><input className='Check' type='checkbox'/>Remember Me</label>
            </div>}
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignup
