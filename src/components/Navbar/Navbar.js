import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styles from "./Navbar.css";
import Logout from "../Logout";
import { useState } from "react";
library.add(faUser, faHouse, faDumbbell);



const Navbar = () => {
    
    let checkLoggedIn = JSON.parse(localStorage.getItem("login")) 

    

    let usrObj = JSON.parse(localStorage.getItem('user')) 


    let[isLogged, setLoggedIn] = useState(checkLoggedIn);

    const handleLogout = () => {
        localStorage.clear("login");
        setLoggedIn(false);
    }


    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong py-0 ">
                <Link><img src={require("../../assets/gsicon.jpeg")} /></Link>
                
                <div className="collapse navbar-collapse navsec " id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/"><li className="nav-item active d-flex align-items-center py-0">
                            <FontAwesomeIcon icon="house" />
                            <span>Home</span>
                        </li></Link>
                        {checkLoggedIn ? <Link to="/user"> <li className="nav-item d-flex align-items-center py-0">
                            
                            <FontAwesomeIcon icon="user" />
                            <span>{usrObj.name}</span>
                        </li> </Link> : <Link to="/login"> <li className="nav-item d-flex align-items-center py-0">
                            
                            <FontAwesomeIcon icon="user" />
                            <span>login/signup</span>
                        </li> </Link>}
                        
                        
                        <Link to="/aboutus"> <li className="nav-item d-flex align-items-center py-0"><FontAwesomeIcon icon="dumbbell" />
                        <span>About Us</span>
                        </li></Link>
                        {isLogged ? <Logout/> : ""}
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar