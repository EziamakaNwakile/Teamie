import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import "./signup.css"


export default function SignUp() {
    const element = <FontAwesomeIcon icon={faUser} />
    const element1 = <FontAwesomeIcon icon={faUsers} />
    const element2 = <FontAwesomeIcon icon={faFlag} />
    const element3 = <FontAwesomeIcon icon={faSignOutAlt} />

    return (
        <div className="signup-container">
            <div className="flexed-container">
            <div className="sidebar">
                <div>
                    <div>
                        <h1 id="teamie">TEAMIE</h1>
                        {/* <img alt="logo"/> */}
                    </div>
                    <div className="sidebar-icon">
                        <p className="list-item">
                            <span>{element}</span>
                            <span>Create New Employee</span>
                        </p>
                        <p className="list-item">
                            <span>{element1}</span>
                            <span>View All Employees</span>
                        </p>
                        <p className="list-item">
                            <span>{element2}</span>
                            <span>Flagged Content</span>
                        </p>
                        <p className="list-item">
                            <span>{element3}</span>
                            <span>Logout</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="signup-form">
                    <h3 className="create-employee-h3">Create New Employee</h3>
                    <br></br>
                   <div className="form-container">
                       <form className="form-div">
                           <div className="first-inputs">
                               <input 
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                               />
                                <input 
                                 type="text"
                                 name="username"
                                 placeholder="Username"
                                />
                               <input 
                                type="text"
                                name="firstname"
                                placeholder="Staff NO"
                               />
                           </div>
                           <div>
                               <input 
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                               />
                                <input 
                                 type="text"
                                 name="email"
                                 placeholder="Email"
                                />
                               <input 
                                type="text"
                                name="firstname"
                                placeholder="Date of Date"
                               />
                           </div>
                       </form>
                           <button className="submit-new-employee">Submit</button>
                    </div> 
                </div>
            </div>
            </div>
        </div>
    )
}
