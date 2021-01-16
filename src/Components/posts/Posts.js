import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import "./posts.css"
// import Post from './post.png'

export default function Posts() {
    // const element = <FontAwesomeIcon icon={faUser} />
    const element1 = <FontAwesomeIcon icon={faUsers} />
    const element2 = <FontAwesomeIcon icon={faFlag} />
    const element3 = <FontAwesomeIcon icon={faSignOutAlt} />

    return (
        <div className="signup-container">
            <div className="flexed-container">
            <div className="sidebar">
                <div className="sidebar-child">
                    <div>
                        <h1 id="teamie">TEAMIE</h1>
                    </div>
                    <div>
                        <p className="list-item">
                            <span>{element1}</span>
                            <span>New Post</span>
                        </p>
                        <p className="list-item">
                            <span>{element2}</span>
                            <span>All My Post</span>
                        </p>
                        <p className="list-item">
                            <span>{element3}</span>
                            <span>Logout</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="post-section">
                <div className="post-form">
                    <h3 className="create-employee-h3">Create Post</h3>
                    <br></br>
                   {/* <div className="form-container"> */}
                       <form className="form-div">
                           <div className="first-inputs">
                               <input 
                                type="text"
                                name="title"
                                placeholder="Title"
                               />
                                <input 
                                 type="text"
                                 name="category"
                                 placeholder="Category"
                                />
                               <textarea 
                                type="text"
                                name="writeup"
                                placeholder="Start writing..."
                               />
                           </div>
                       </form>
                           <button className="submit-new-employee">Submit</button>
                    </div> 
                </div>
                {/* <img src={Post} alt="Share Post" /> */}
            </div>
            {/* </div> */}
        </div>
    )
}
