import "./navbar.css"
import Logo from "../../image/logo.png"
import iconSearch from "../../image/baseline_search_black_36dp.png"
import { FormControl, Image, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import React,{useState,useEffect} from "react"
import { GET_CONTENT } from "../../graphql/queries"
import { useQuery } from "@apollo/client"
export default function Navbar() {
  const [cookie, setCookie, removeCookie] = useCookies(["admin"]);
  const navigate=useNavigate()
  const handleLogout = () => {
    removeCookie("admin", {
      path: "/",
    });
  navigate("/login")
  };
  const {data,loading,refetch}=useQuery(GET_CONTENT);
  const [input,setInput]=useState("");
  const handleChange=(e)=>{
    setInput(e.target.value);
  }
  useEffect(() => {
    if (input.length > 0) {
      refetch({
        title: {
          title: input,
        },
      });
    } else {
      refetch({
        title: {},
      });
    }
  }, [input]);
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
      value={input}
      onChange={handleChange}
    />
      <img src={iconSearch} alt="iconsearch img-fluid" width="10%" height="10%" />
  </InputGroup>
      </div>
    </div>
        </nav>
    )
}
