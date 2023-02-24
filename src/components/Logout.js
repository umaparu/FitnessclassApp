import { Link } from "react-router-dom";
import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from "./Logout.css";
import Jumbotron from "./Jumbotron/Jumbotron"
import { motion } from 'framer-motion';

const USER_OBJECT = "USER_OBJECT";

function Logout() {

    const variants = {
    visible: { x: 0 },
    hidden: { x: '-100%' }
  };


  let usrObj = window.sessionStorage.getItem(USER_OBJECT );
  window.sessionStorage.removeItem(USER_OBJECT );

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

/*
  
const Logout = (props) => {  
    let usrObj = window.sessionStorage.getItem(USER_OBJECT );
    window.sessionStorage.removeItem(USER_OBJECT );
   // props.history.push('/');
    return ( <>

        <div className="wrapper">
            <Jumbotron/>
        </div>
        </>
    )
}
*/
export default Logout;
