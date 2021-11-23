import myLogo from "../assets/image/logo.png"
const HeaderAdmin=()=>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                <div className="container">
                    <span className="navbar-brand" href="#">
                        <img src={myLogo} alt="logo" width="80px" height="60px" style={{marginLeft: 30, paddingLeft: 50}} />
                    </span>
                </div>
            </nav>
        </header>
    )
};
export default HeaderAdmin;