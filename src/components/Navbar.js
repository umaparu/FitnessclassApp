import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'; 
import styles from "../components/Navbar.css";
library.add(faUser, faHouse, faMagnifyingGlass); 



const Navbar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={ require ("../assets/gymsquad.jpeg")}></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navsec" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <FontAwesomeIcon icon="house" />
                        </li>
                        <li className="nav-item">
                        <FontAwesomeIcon icon="user" />
                        </li> 
                        <li><FontAwesomeIcon icon="magnifying-glass" /></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar