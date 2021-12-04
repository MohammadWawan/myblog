import "./navbar.css"
import Logo from "../../image/logo.png"

export default function Navbar() {
    return (
        <nav >
        <div className="top">
      <div className="topLeft">
      <img src={Logo} alt="logo" width="80px" height="auto" style={{marginLeft:"50px"}} />
      </div>
      <div className="topCenter">
        <ul className="topList">
         <h3>Selamat Datang di Blog Mohammad Wawan</h3>
        </ul>
      </div>
      <div className="topRight">
      </div>
    </div>
        </nav>
    )
}
