import React from 'react';
import ReactDOM from 'react-dom/client';
import { activities } from './Activities.js';


/* If user is not registered show registration page
Else if user is registered, and not logged in show login page
else show user profile with options to change details

*/

const USER_STORAGE_KEY="GYM_SQUAD_USERS";
const NINJA_KEY="XZJKWu8P021vYpDM4ulaHA==bu8C9RGKvivdGFg3";

function User() {
   //localStorage.removeItem(USER_STORAGE_KEY);
   // console.log(  localStorage.getItem(USER_STORAGE_KEY ));
  return (<UserForm  />);
}

export default User

class UserForm extends React.Component {

    constructor(props) {
      super(props);
     // this.state = {isSubmitted: false};
     this.userFound = false;
     this.state = {isSubmitted: false,
        error: null,
        isLoaded: false,
        items: []
         };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.activityDetails="";
    }

    /*
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    */

    // TODO - Validate user form responses
    validateResponses(event) {

        return ;
    }
    
    // HAndle clicks on Activity radio buttons. This will display sample activities from API-NINJA website
    handleClick(event) {
        let checkVal= event.target.value;
        //console.log(event.target.value);
        if (event.target.type=="checkbox") {
            this.getActivitites(checkVal);
        }
        //console.log(event.target.type);

      }

    // Handle API Call and response
    async getActivitites(actType){
        
		let URL = 'https://api.api-ninjas.com/v1/exercises?type='+ actType;
		fetch(URL, {
            method: 'GET',
            headers: {
                'X-Api-Key': NINJA_KEY
            },	
            })
        .then(res => res.json())
        .then(
          (result) => {
           // console.log(result[0]);
            let actVal = "<div class='container'>";
            for (let i=0; i< 5; i++) {
                actVal = actVal + "<div class='row'><div class='col-md'>" +result[i].name + "</div><div class='col-md'>" +
                result[i].difficulty + "</div> </div>";
            }
            actVal = actVal + "</div>";
            //console.log(actVal);
            document.getElementById("activityDetails").innerHTML = actVal;

            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
	}
    
    // Search if user exists then login
    searchUser(userList, email1, password1) {
        let userStatus = false;
        if (userList != null) {

            let strArr = userList.split("},");
            let usrObj;

            for (let i=0; i<strArr.length; i++ ) {
                let str = strArr[i];
                let lcaseStr=str.toLowerCase();
                
                //console.log(lcaseStr);
                let x= lcaseStr.indexOf(email1.toLowerCase().trim());
                if (x !=-1) {
                    //this.status= USER_FOUND;
                    userStatus=true

                } else {
                    //this.status= USER_NOT_FOUND;
                    userStatus=false
                }
            }
        } 

        console.log(userStatus);
        return userStatus;
    }   


    // Handle the Form Submit event
    handleSubmit(event) {
        this.validateResponses(event);
        let actArr=[];

        for (let i=0; i<7; i++) {
            let checkId = 'chk'+i;
           // console.log(checkId);
            if ( document.getElementById(checkId).checked==true)
            actArr.push(i);
        }

        let email1= event.target.inputEmail.value;
        let password1= event.target.inputPassword.value;

        let gUser = {
            "title": event.target.inputTitle.value, 
            "firstName": event.target.inputFirstName.value, 
            "lastName":event.target.inputLastName.value, 
            "email": email1, 
            "password": password1,
            "age": event.target.inputAge.value,
            "postCode": event.target.inputPostCode.value,
            "agreeTerms": event.target.termsCheck.value,
            "activities": actArr
        }

        //localStorage.removeItem(USER_STORAGE_KEY);

        let userList=localStorage.getItem(USER_STORAGE_KEY);

        if (userList == null)
        {
            let usrArr = [JSON.stringify(gUser)];
            localStorage.setItem(USER_STORAGE_KEY, usrArr ); 
        } else {
            this.userFound = this.searchUser(userList, email1, password1);
            if (this.userFound == false) {
                let usrArr = [userList, JSON.stringify(gUser) ];
                // console.log(usrArr);
                localStorage.removeItem(USER_STORAGE_KEY);
                localStorage.setItem(USER_STORAGE_KEY, usrArr ); 
                // console.log(typeof userList);
            }

        }
        this.setState({isSubmitted: true});
        event.preventDefault();
    }
      
 
    render() {
        const activityListItems = activities.map(activity => 
            <div className="form-check">
            <input className="form-check-input" type="checkbox" onClick={this.handleClick} value={activity.name} id={'chk' +activity.id}/>
            <label className="form-check-label" htmlFor={'chk' +activity.id}>
            {activity.name}
            </label>
            </div>
            );

        if (this.state.isSubmitted) {
            let str="User registration successful. Please login.";
            if (this.userFound == true) {
                str= "User already exists. Please login.";
            }
            return(str);
        } else 
      return (
        <div id="register-user">
            <div id="reg-heading" className="container w-50 overflow-auto"> 
            <div className="text-center"> <h1> New User Registration </h1></div>
               
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="inputTitle">Title</label>
                        <input type="text" className="form-control" id="inputTitle" aria-describedby="titleHelp" placeholder="Enter Title"/>
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" className="form-control" id="inputFirstName" aria-describedby="firstNameHelp" placeholder="Enter First Name" required/>
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="lainputLastNamestName">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" aria-describedby="lasttNameHelp" placeholder="Enter Last Name" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-7">
						<label htmlFor="inputEmail">Email Address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email address" required/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputAge">Age</label>
                        <input type="text" className="form-control" id="inputAge"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Locality"/>
                </div>    
                <div className="form-row">
                    <div className="form-group col-md-7">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="London"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputPostCode">Post Code</label>
                        <input type="text" className="form-control" id="inputPostCode"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputSelectActivity">Select all interested activities</label>
                        <div className="form-group col-md-2">
                            {activityListItems}
                        </div>
                    </div>
                    <div className="form-group col-md-5 border ">
                        <div id="activityDetails"></div>
                            {this.activityDetails}
                            
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="termsCheck" required/>
                        <label className="form-check-label" htmlFor="termsCheck">
                            I agree to the <a className="link-secondary" href="./terms.html">terms and conditions</a>
                        </label>
                    </div>
                </div>        
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      );
    }
}