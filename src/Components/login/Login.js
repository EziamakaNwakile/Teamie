import React from 'react'
import "./login.css"
import Welcome from './welcome.png'

export default function Login() {
    return (
        <div className="signup-container">
            <div className="flexed-container">
                <div className="login-img">
                    <h1>TEAMIE</h1>
                    <img src={Welcome} alt="welcome" />
                </div>
                <div className="login-details">
                    <h3 className="create-employee-h3">Login</h3>
                    <br></br>
                   {/* <div className="form-container"> */}
                       <form className="login-form">
                           <div className="first-inputs">
                               <input 
                                type="text"
                                name="username"
                                placeholder="username"
                               />
                                <input 
                                 type="text"
                                 name="password"
                                 placeholder="Password"
                                />
                           </div>
                       </form>
                           <button className="login-btn">Submit</button>
                    {/* </div>  */}
                </div>
            </div>
        </div>
    )
}
