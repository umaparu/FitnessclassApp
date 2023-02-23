import { Link } from "react-router-dom";
import styles from "./Jumbotron.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import Instructors from "../Instructors";
import InstructorHeader from "../InstructorHeader";
import instructors from "../../instructors.json";
import "../Instructors.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { motion } from 'framer-motion';


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
  /*

    const variants = {
    visible: { x: 0 },
    hidden: { x: '-100%' }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
    <>
    <div className="wrapper">
     <p> Logged out .............</p>
    </div>
    </>
    </motion.div>
  );
}

  */

  function UserGreeting(props) {
    const [content, setContent] = useState("");
  
    const handleClick = () => {
        setContent( <ShowInstructors /> );
      };

    return <>
        <div className="jumbotron jumbotron-fluid ">
            <div className="planbox">
                <p className="plantext"> Select your instructor !...</p>
                <div>
                    <button className="btn btn-light btn-lg" onClick={handleClick}>Select Workout</button>
                    <p className="plantext">{content}</p>
                </div>
        </div>
        </div>

    </>
    ;

  }

  function ShowInstructors(props) {

    const [content2, setContent2] = useState("");

    const variants = {
        visible: { x: 0 },
        hidden: { x: '-100%' }
      };
  
    /*
    const handleClick = () => {
        setContent2( <ShowWorkOut /> );
      }; */

    return (

        <>
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}>
            <InstructorHeader />
            <div className="d-flex justify-content-around trainers">
            {
                instructors.map(instructor => (
                    <Instructors
                        id={instructor.id}
                        name={instructor.name}
                        image={instructor.image}
                        speciality={instructor.speciality}
                        muscles={instructor.muscles}
                    />
                ))}
                </div>
        </motion.div>

        </>
    )
}

  /*
  function ShowWorkout() {
    const [content, setContent] = useState("");
  

  }
  */

  /*

  function ShowInstructors(props) {

    const [content2, setContent2] = useState("");
  
    /*
    const handleClick = () => {
        setContent2( <ShowWorkOut /> );
      }; */
/*
    return (

        <>
            <InstructorHeader />
            <div className="d-flex justify-content-around trainers">
            {
                instructors.map(instructor => (
                    <Instructors
                        id={instructor.id}
                        name={instructor.name}
                        image={instructor.image}
                        speciality={instructor.speciality}
                        muscles={instructor.muscles}
                    />
                ))}
                </div>
        </>
    )
}

*/
function Instructors(props) {
    const [content2, setContent2] = useState("");
  
    const handleClick2 = () => {
        setContent2( <ShowWorkOut /> );
      };

    return (
        <div>
            <div className="row">
                <Card key='Dark'  bg='dark' text='light' className="mb-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="card-img-top" src={props.image} alt="Image" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Speciality: {props.speciality}
                            Muscle: {props.muscles} 
                        </Card.Text>
                        <Button variant="primary" onClick={handleClick2} >Contact {props.name} </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

function ShowWorkOut(props) {
    const [content2, setContent2] = useState("");

    return (
            <div className="d-flex justify-content-around trainers">
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
                </div>
    )
}



export default Jumbotron;