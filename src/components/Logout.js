import { Link } from "react-router-dom";


const USER_OBJECT = "USER_OBJECT";

function Logout() {

  let usrObj = window.sessionStorage.getItem(USER_OBJECT );
  console.log(usrObj);
  window.sessionStorage.removeItem(USER_OBJECT );
  console.log("AFTER" + usrObj);
  return (
  
  <p>Logged out</p>);
}

export default Logout;