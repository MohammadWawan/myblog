import React from 'react'
import bg from "../../image/gb-head.jpg"
import "./header.css"
export default function Header() {
    return (
    <div>
      <img className="headerImg img-fluid" src={bg} alt="" style={{height:'auto',width:'100%'}}/>
      <div className="centered headerTitles position-absolute top-50 start-50 translate-middle text-center">
        WELCOME</div>
    </div>
    )
}

