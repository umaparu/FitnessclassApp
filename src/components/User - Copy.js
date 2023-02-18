import React from 'react';
import ReactDOM from 'react-dom/client';


/* If user is not registered show registration page
Else if user is registered, and not logged in show login page
else show user profile with options to change details

*/

function User() {
  return (<UserForm  />);
}

export default User

/*
class GymUser {
    
    firstName="";
    lastName="";
    email="";
    password="";

constructor(firstName, lastName, email, password){
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
  
    handleSubmit(event) {

        console.log(event.target.inputFirstName.value);
          this.setState({isSubmitted: true});
      event.preventDefault();
    }
      
 
    render() {
       // alert('state value: ' + this.state.isSubmitted);
        if (this.state.isSubmitted) {
           
            return(
      <p>User registration succeessful..</p>);
        } else 
      return (
        <div id="register-user">
            <div id="reg-heading" class="container w-50 overflow-auto"> 
            <div class="text-center"> <h1> New User Registration </h1></div>
               
                <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label for="inputTitle">Title</label>
                        <input type="text" class="form-control" id="inputTitle" aria-describedby="titleHelp" placeholder="Enter Title"/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" class="form-control" id="inputFirstName" aria-describedby="firstNameHelp" placeholder="Enter First Name" required/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="lainputLastNamestName">Last Name</label>
                        <input type="text" class="form-control" id="inputLastName" aria-describedby="lasttNameHelp" placeholder="Enter Last Name" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-7">
						<label for="inputEmail1">Email Address</label>
                        <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter Email address" required/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputAge">Age</label>
                        <input type="text" class="form-control" id="inputAge"/>
                    </div>
                </div>


                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Locality"/>
                </div>    
            
                <div class="form-row">
                    <div class="form-group col-md-7">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" placeholder="London"/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputPostCode">Post Code</label>
                        <input type="text" class="form-control" id="inputPostCode"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword1">Password</label>
                    <input type="password" class="form-control" id="inputPassword1" placeholder="Password" required/>
                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="termsCheck" required/>
                        <label class="form-check-label" for="termsCheck">
                            I agree to the <a class="link-secondary" href="./terms.html">terms and conditions</a>
                        </label>
                    </div>
                </div>        
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      );
    }
}
  
