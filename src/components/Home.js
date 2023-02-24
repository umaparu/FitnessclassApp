import Jumbotron from "./Jumbotron/Jumbotron"

const USER_LOGGED_IN ="USER_LOGGED_IN";
const USER_OBJECT = "USER_OBJECT";

let usrObj = window.sessionStorage.getItem(USER_OBJECT );

const Home = () => {

   return (

       <div className="wrapper">
           <Jumbotron/>
       </div>
   )
}

export default Home