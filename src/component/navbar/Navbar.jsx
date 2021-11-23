import "./navbar.css"
import Logo from "../assets/image/logo.png"
import iconSearch from "../assets/image/baseline_search_black_36dp.png"
import { Button, FormControl, InputGroup } from "react-bootstrap"
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
          <li className="topListItem">
            <div className="link">
              WRITE
            </div>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Search"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      <img src={iconSearch} alt="iconsearch" width="12px"/>
    </Button>
  </InputGroup>
      </div>
    </div>
        </nav>
    )
}
