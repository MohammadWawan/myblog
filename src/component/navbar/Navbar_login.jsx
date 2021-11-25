import "./navbar.css"
import Logo from "../assets/image/logo.png"

export default function Navbar() {
    return (
        <nav >
        <div className="top">
      <div className="topLeft">
      <img src={Logo} alt="logo" width="80px" height="auto" style={{marginLeft:"50px"}} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <div className="link">
              HOME
            </div>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="topRight">
      </div>
    </div>
        </nav>
    )
}
