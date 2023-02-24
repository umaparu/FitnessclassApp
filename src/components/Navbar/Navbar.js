import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

import styles from "./Navbar.css";
library.add(faUser, faHouse, faDumbbell);


const USER_LOGGED_IN ="USER_LOGGED_IN";
const USER_OBJECT = "USER_OBJECT";

let usrObj = window.sessionStorage.getItem(USER_OBJECT );

const Navbar = () => {
 
    let userText;
    let linkRef;

    if (usrObj != null) {
       // console.log(usrObj);
        let usrObj1 = JSON.parse(usrObj);
        //console.log(usrObj1);
        userText = usrObj1.firstname; 
        linkRef ="/workout";

    } else {
        userText = "Login/Signup";
        linkRef ="/login";
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
                        <Link to={linkRef}> <li className="nav-item d-flex align-items-center py-0">
                            
                            <FontAwesomeIcon icon="user" />
                            <span>{userText}</span>
                        </li> </Link>
                        
                        <Link to="/aboutus"> <li className="nav-item d-flex align-items-center py-0"><FontAwesomeIcon icon="dumbbell" />
                        <span>About Us</span>
                        </li></Link>

                        <LogoutText />
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar

function LogoutText() {
    if (usrObj != null) {
    {
            return(
                <Link to="/logout"> <li className="nav-item d-flex align-items-center py-0">
                    <span>Logout</span></li></Link> );
    } 
    return;


}
}