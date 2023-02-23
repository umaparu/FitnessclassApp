import { Link } from "react-router-dom";
import style from "./Accounts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

library.add(faPersonRunning, faEnvelope, faLocationDot, faPhone);

const Accounts = () => {
    return <div>
        <div className="account">
            <div className="profile">
                <div className="">
                    <div className="icon-container">
                    <img className="user-icon" src="images/gym.png" ></img>
                    </div>
                    <div className="profile-content">
                    <p className="user-name">
                    <FontAwesomeIcon icon="fa-phone" /><span>: +44 - 999 999 9999</span>
                    </p>
                    <p className="user-email ">
                        <FontAwesomeIcon icon="fa-envelope" /><span>: <a href="mailto:contact@gymsquad.com">contact@gymsquad.com</a></span>
                    </p>
                    <p className="user-location ">
                        <FontAwesomeIcon icon="location-dot" /><span>: 1234 Street, London</span>
                    </p>
                    </div>
                </div>
            </div>
            <div className="workout-plan">
                <p>
                <img className="img-fluid" src="images/location.png" ></img>
                </p>
            </div>
        </div>
    </div>
}


export default Accounts