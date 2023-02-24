import { Link } from "react-router-dom";
import styles from "./Jumbotron/Jumbotron.css";
import React from 'react';
import Jumbotron from "./Jumbotron/Jumbotron"

import { useNavigate } from "react-router-dom";
import { withRouter } from 'react-router';


const USER_STORAGE_KEY="GYM_SQUAD_USERS";
const USER_NOT_FOUND="USER_NOT_FOUND";
const WRONG_PASSWORD="WRONG_PASSWORD";
const USER_FOUND="USER_FOUND";
const USER_LOGGED_IN ="USER_LOGGED_IN";
const USER_OBJECT = "USER_OBJECT";

let alertMsg="";

/*
const Login = () => {
        console.log(  localStorage.getItem(USER_STORAGE_KEY ));
        return (<LoginForm  />);

}
*/

function Login() {
     console.log(  localStorage.getItem(USER_STORAGE_KEY ));
  // window.sessionStorage.removeItem(USER_OBJECT );
   return (<LoginForm  />);
 }



class LoginForm extends React.Component {
    

    constructor(props) {
      super(props);
      this.state = {isSubmitted: false};
      this.handleSubmit = this.handleSubmit.bind(this);

      let usrObj = window.sessionStorage.getItem(USER_OBJECT ); 
      if (usrObj != null) {
          console.log(usrObj);
         // alert("user found");
          this.status= USER_LOGGED_IN;

      }

    }

    // TODO - validate the responses
    validateResponses(event) {
        return ;
    }

    // Search if user exists then login
    searchUser(userList, email1, password1) {
        if (userList != null) {

            let strArr = userList.split("},");
            let usrObj;
            //searchUser(strArr, email1, password1);

            for (let i=0; i<strArr.length; i++ ) {
                let str = strArr[i];
                let lcaseStr=str.toLowerCase();
                
                //console.log(lcaseStr);
                let x= lcaseStr.indexOf(email1.toLowerCase().trim());
                if (x !=-1) {
                    this.status= USER_FOUND;
                    
                    if (lcaseStr.charAt(lcaseStr.length-1) !='}') {
                        //alert(lcaseStr.charAt(lcaseStr.length-1));
                        lcaseStr =  lcaseStr + '}';
                    } 
                    usrObj = JSON.parse(lcaseStr);
                   console.log(usrObj);
                    if (password1.trim() == usrObj.password.trim()) {
                        this.status= USER_LOGGED_IN;
                        window.sessionStorage.setItem(USER_OBJECT, JSON.stringify(usrObj));
                        //this.props.history.push('/');
                       // this.props.history.replace('/');
                        break;
                       // alert("LOgged in" + this.status);
                    } else {
                        this.status= WRONG_PASSWORD;
                        alertMsg = "Please enter correct password..";
                        break;
                        //alert("Wrong password");
                    }
                } else {
                    //alert("zzzzzzzzzzzLOgged in" + this.status);
                    this.status= USER_NOT_FOUND;
                    alertMsg = "User not registered..";
                }
            }
           // console.log(strArr, email1, password1);
        } else {
            //alert("NO REGISTERED USERS....");
            alertMsg = "NO REGISTERED USERS...";
        }
    }

    // Handle the Form SUbmit
    handleSubmit(event) {
        this.validateResponses(event);
        alertMsg="";

        let email1= event.target.inputEmail.value;
        let password1= event.target.inputPassword.value;

        let userList=localStorage.getItem(USER_STORAGE_KEY);
        this.searchUser(userList, email1, password1);

        this.setState({isSubmitted: true});
        event.preventDefault();
    }
      
 
    render() {
        //alert("LOGGED IN " + this.status);
       // alert('state value: ' + this.state.isSubmitted);
       /* if (this.state.isSubmitted) {
           
            return(
      <p>User registration successful. Please login.</p>);
        } else */
        if (this.status==USER_LOGGED_IN) {
           // alert(this.status);
            return(
                <div className="wrapper">
                <Jumbotron/>
            </div>
      
      );
        } else 
      return (
   <div className="jumbotron jumbotron-fluid ">

    <div id="reg-heading" className="container w-25  float-right">
        <div id="messageDiv" className="text-danger">{alertMsg}</div>
    <form onSubmit={this.handleSubmit}>
    <div className="form-row">
        <div className="form-group">
            <label className="text-light" htmlFor="inputEmail">Email Address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email address" required/>
        </div>
    </div>
    <div className="form-row">
        <div className="form-group">
            <label className="text-light" htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
        </div>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>

    <div className="container-fluid">
        <div className="planbox">
        <p className=" plantext"> New to the fitness? Or just tired of developing your own workout plan?</p>
        <p className=" plantext"> Click below to generate your own personalised plan!</p>
        <Link role="button" className="btn btn-primary btn-lg" to="/user">Get Started</Link>
        </div>
    </div>
</div>
      );
    }
}

export default Login;