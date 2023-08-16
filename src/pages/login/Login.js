import React from "react"
import "./login.css"

function Login(){
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginContainer-left">
                     <h1>Lamasocial</h1>
                     <p>Connect with friends and the world around you on lamasocial.</p>
                </div>
                <div className="loginContainer-right">
                     <input placeholder="Username" type="text" autocomplete="off"></input>
                     <input placeholder="Email" type="email" autoComplete="off"></input>
                     <input placeholder="Password" type="password" autocomplete="off"></input>
                     <input placeholder="Password Again" type="password" autocomplete="off"></input>
                     <button className="signButton">Sign Up</button>
                     <button className="loginButton">Log into Account</button>
                </div>
            </div>
        </div>
    )
}


export default Login;