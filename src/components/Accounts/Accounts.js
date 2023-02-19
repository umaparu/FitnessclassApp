import { Link } from "react-router-dom";
import style from "./Accounts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
library.add(faPersonRunning, faEnvelope, faLocationDot);

const Accounts = () => {
    return <div>
        <div className="account">
            <div className="profile">
                <div className="">
                    <div className="icon-container">
                    <img className="user-icon" src="https://via.placeholder.com/250" ></img>
                    </div>
                    <div className="profile-content">
                    <p className="user-name">
                        <FontAwesomeIcon icon="user" /><span>: placeholder</span>
                    </p>
                    <p className="user-email ">
                        <FontAwesomeIcon icon="fa-envelope" /><span>: placeholder</span>
                    </p>
                    <p className="user-location ">
                        <FontAwesomeIcon icon="location-dot" /><span>: placeholder</span>
                    </p>
                    </div>
                </div>
            </div>
            <div className="workout-plan">
                <p></p>
            </div>
        </div>
    </div>
}


export default Accounts