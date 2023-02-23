import { Link } from "react-router-dom";
import styles from "./Jumbotron.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const USER_LOGGED_IN ="USER_LOGGED_IN";
const USER_OBJECT = "USER_OBJECT";

let usrObj = window.sessionStorage.getItem(USER_OBJECT );

const Jumbotron = (props) => {

    let userText;
    let isLoggedIn = false;

    if (usrObj != null) {
        let usrObj1 = JSON.parse(usrObj);
        console.log(usrObj1);
        userText = usrObj1.firstname; 
        isLoggedIn=true;

    } else {
        userText = "";
        isLoggedIn=false;
    }
    return (
        <>
            <Greeting isLoggedIn={isLoggedIn} />
        </>
    );
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;


    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }

  }

 
  function GuestGreeting(props) {
    return <>
    <div className="jumbotron jumbotron-fluid ">
    <div className="planbox">
    <p className="plantext"> New to the fitness? Or just tired of developing your own workout plan?</p>
    <p className="plantext"> Click below to generate your own personalised plan!</p>
    <Link to="/user" className="btn btn-primary btn-lg" role="button">Get Started</Link>
    </div>
    </div>
    </>
    ;

  }

  function UserGreeting(props) {
    const [content, setContent] = useState("");
  
    const handleClick = () => {
      setContent("This is the new content.");
    };

    return <>
    <div className="jumbotron jumbotron-fluid ">
    <div className="planbox">
    <p className="plantext"> Select your workout plan?</p>
    <Link to={handleClick} className="btn btn-primary btn-lg" role="button">Select Workout</Link>
    <div>
      <button className="btn btn-light btn-lg" onClick={handleClick}>Select Workout</button>
      <p className="plantext">{content}</p>
    </div>
    </div>
    </div>
    </>
    ;

  }

  function ShowWorkout() {
    const [content, setContent] = useState("");
  
    const handleClick = () => {
      setContent("This is the new content sdssssssssssssssssssssssssssssssssssssssssssss.");
    };
  }

export default Jumbotron;