import React,{useState} from 'react'
import NavbarLogin from '../../component/navbar/Navbar_login'
import "./login.css"
import {useCookies} from "react-cookie"
import { LOGIN_ADMIN } from '../../graphql/queries'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

const Login=()=> {
  const navigate=useNavigate()
  const [getUser, { data, loading, error }] = useLazyQuery(
    LOGIN_ADMIN
  );
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [cookie, setCookie, removeCookie] = useCookies(["admin"]);
  const handleChange = (e) => {
    setSignIn({
      ...signIn,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser({
      variables: {
        email: signIn.email,
        password: signIn.password,
      },
    });
    console.log(data)
    if (data?.myBlog_user.length > 0) {
      setCookie("admin", signIn.email, {
        path: "/",
        maxAge: 7200,
      });
      navigate("/Admin")
    } else {
      alert("email&password salah")
      setSignIn({
        email: "",
        password: "",
      });
    }
  };
 
    return (
        <div>
        <NavbarLogin />
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label style={{marginRight:"170px"}}>Email</label>
        <input 
        className="loginInput" 
        type="text"
        placeholder="Enter your email..."
        name="email"
        value={signIn.email}
        onChange={handleChange}
        required
        />
        <label style={{marginRight:"140px"}}>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        name="password"
        value={signIn.password}
        onChange={handleChange}
        required
        />
        <button className="loginButton" onClick={handleSubmit}>Login</button>
      </form>
    </div>
        </div>
    )
}
export default Login;