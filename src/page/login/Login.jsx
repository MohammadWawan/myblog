import React from 'react'
import NavbarLogin from '../../component/navbar/Navbar_login'
import "./login.css"

export default function Login() {
    return (
        <div>
        <NavbarLogin />
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label style={{marginRight:"170px"}}>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label style={{marginRight:"140px"}}>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" >Login</button>
      </form>
    </div>
        </div>
    )
}
