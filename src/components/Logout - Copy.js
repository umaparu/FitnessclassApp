import { Link } from "react-router-dom";

import styles from "./Logout.css";
import Jumbotron from "./Jumbotron/Jumbotron"
//import React from 'react';
/*
import { useSpring, animated } from 'react-spring';

import { motion } from 'framer-motion';


import { CSSTransition } from 'react-transition-group';
*/
//import React, { useState, Toggle , Items} from 'react';



const USER_OBJECT = "USER_OBJECT";



  
const Logout = (props) => {  
    alert("sasasas");
    let usrObj = window.sessionStorage.getItem(USER_OBJECT );
    window.sessionStorage.removeItem(USER_OBJECT );
    this.props.history.push('/');
    return (

        <div className="wrapper">
            <Jumbotron/>
        </div>
    )
}

export default Logout;

/*


//import { useSpring, animated } from 'react-spring'

//import { useTrail, animated } from 'react-spring'

 /*

function Logout() {

    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  
    return (
      <motion.div animate={{ x: 100 }} transition={{ duration: 5 }}>
        <h1>Welcome to my website!</h1>
      </motion.div>
    );
  }
*/
  /*

  function Logout() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <CSSTransition
        in={false}
        timeout={3000}
        classNames="fade"
        unmountOnExit
      >
        <h1>Welcome to my website!</h1>
      </CSSTransition>
    </div>
  );
}
*/
/*
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const Logout= () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
)

export default Logout;
*/