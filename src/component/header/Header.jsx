import React from 'react'
import bg from "../../image/gb-head.jpg"
import "./header.css"
export default function Header() {
    return (
    <div>
      <img className="headerImg" src={bg} alt="" style={{height:'auto',width:'100%'}}/>
      <div className="centered headerTitles">WELCOME</div>
    </div>
    )
}

