import React from 'react'; 
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useRef } from "react";

const LoginForm = ({click}) => {
    const showDivRef = useRef(null);
    
    return (
        <div ref={showDivRef} className="loginform_container">
            <div className='r-side'>
                <div className='wrapper'>
                    <div
                    className="remove-form"
                    onClick={() => {
                    showDivRef.current.classList.add("animate");
                    setTimeout(() => click(), 500);
                    }}
                >
                    ✕
                </div>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' /> </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' /> </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label> <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div> 
                </div>
            </div>
        </div>);
};
export default LoginForm;