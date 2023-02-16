import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from "../components/Navbar.css";
library.add(faUser, faHouse, faMagnifyingGlass);



const Navbar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link><img src={require("../assets/gymsquad.jpeg")} /></Link>
                
                <div className="collapse navbar-collapse navsec" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/"><li className="nav-item active d-flex align-items-center">
                            <FontAwesomeIcon icon="house" />
                            <span>Home</span>
                        </li></Link>
                        <Link to="/user"> <li className="nav-item d-flex align-items-center">
                            
                            <FontAwesomeIcon icon="user" />
                            <span>Login/Signup</span>
                        </li> </Link>
                        
                        <Link to="/aboutus"> <li className="nav-item d-flex align-items-center"><FontAwesomeIcon icon="magnifying-glass" />
                        <span>About Us</span>
                        </li></Link>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar