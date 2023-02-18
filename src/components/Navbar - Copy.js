import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styles from "../components/Navbar.css";
library.add(faUser, faHouse, faDumbbell);



const Navbar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong py-0 ">
                <Link><img src={require("../assets/gsicon.jpeg")} /></Link>
                
                <div className="collapse navbar-collapse navsec " id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/"><li className="nav-item active d-flex align-items-center py-0">
                            <FontAwesomeIcon icon="house" />
                            <span>Home</span>
                        </li></Link>
                        <Link to="/user"> <li className="nav-item d-flex align-items-center py-0">
                            
                            <FontAwesomeIcon icon="user" />
                            <span>Login/Signup</span>
                        </li> </Link>
                        
                        <Link to="/aboutus"> <li className="nav-item d-flex align-items-center py-0"><FontAwesomeIcon icon="dumbbell" />
                        <span>About Us</span>
                        </li></Link>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar