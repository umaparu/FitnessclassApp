 import Jumbotron from "./Jumbotron/Jumbotron"
 import Instructors from "./Instructors"

 
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

    /*
    let userText;

    if (usrObj != null) {
       // console.log(usrObj);
        let usrObj1 = JSON.parse(usrObj);
        console.log(usrObj1);
        userText = usrObj1.firstname; 

        return (

            <div className="wrapper">
                <Jumbotron/>
            </div>
        )

    } else {
        return (

            <div className="wrapper">
                <Jumbotron/>
            </div>
        )
    }


}
*/

export default Home