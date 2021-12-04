import "./navbar.css"
import Logo from "../../image/logo.png"
import iconSearch from "../../image/baseline_search_black_36dp.png"
import { Button, FormControl, Image, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["admin"]);
  const navigate=useNavigate()
  const handleLogout = () => {
    removeCookie("admin", {
      path: "/",
    });
  navigate("/login")
  };
    return (
        <nav >
        <div className="top">
      <div className="topLeft">
      <a href="/">
      <img className="img-fluid" src={Logo} alt="logo" width="80px" height="auto" style={{marginLeft:"50px"}} />
      </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
          <Link to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
          <Link to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <InputGroup className="mb-3 col align-self-end" style={{marginTop:"15px", marginRight:"15px" }} >
      <button onClick={handleLogout}>Logout</button>
    <FormControl
      placeholder="Search"
      aria-describedby="basic-addon2"
    />
      <img src={iconSearch} alt="iconsearch img-fluid" width="10%" height="10%" />
  </InputGroup>
      </div>
    </div>
        </nav>
    )
}
