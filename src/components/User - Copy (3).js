import React from 'react';
import ReactDOM from 'react-dom/client';


/* If user is not registered show registration page
Else if user is registered, and not logged in show login page
else show user profile with options to change details

*/

const USER_STORAGE_KEY="GYM_SQUAD_USERS";

function User() {
   // console.log(  localStorage.getItem(USER_STORAGE_KEY ));
  return (<UserForm  />);
}

export default User


  /*
class GymUser extends React.Component {
    firstName="";
    lastName="";
    email="";
    password="";

constructor(firstName, lastName, email, password){
    super();
    this.firstName = firstName; 
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

}
*/

class UserForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isSubmitted: false};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    */

    validateResponses(event) {

        return ;
    }

    handleSubmit(event) {
        this.validateResponses(event);
        let gUser = {
            "title": event.target.inputTitle.value, 
            "firstName": event.target.inputFirstName.value, 
            "lastName":event.target.inputLastName.value, 
            "email": event.target.inputEmail.value, 
            "password": event.target.inputPassword.value,
            "age": event.target.inputAge.value,
            "postCode": event.target.inputPostCode.value,
            "agreeTerms": event.target.termsCheck.value
        }

        //localStorage.removeItem(USER_STORAGE_KEY);

       
        let userList=localStorage.getItem(USER_STORAGE_KEY);
        console.log(typeof userList);
        console.log(userList);

        if (userList == null)
        {
            let usrArr = [JSON.stringify(gUser)];
            localStorage.setItem(USER_STORAGE_KEY, usrArr ); 
        } else {
            let usrArr = [userList, JSON.stringify(gUser) ];
               // console.log(usrArr);
                localStorage.removeItem(USER_STORAGE_KEY);
                localStorage.setItem(USER_STORAGE_KEY, usrArr ); 
           
           // console.log(typeof userList);
        }



        this.setState({isSubmitted: true});
        event.preventDefault();
    }
      
 
    render() {
       // alert('state value: ' + this.state.isSubmitted);
        if (this.state.isSubmitted) {
           
            return(
      <p>User registration successful. Please login.</p>);
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
  
