import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    let [isCorrectLogin, setLogin] = useState(true)

    let [isSignedUp, setIsSignedUp] = useState(true)

    let [isLoggedIn, setIsLoggedIn] = useState(false)

    const handlesubmitSignup = (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        let user = {
            email: email,
            name: name,
            password: password
        }

        let userStr = JSON.stringify(user)

        console.log(user)

        localStorage.setItem("user", userStr)

        setIsSignedUp(false)

    }

    const handlesubmitLogin = (event) => {
        event.preventDefault();

        let getLogin = JSON.parse(localStorage.getItem("user"));

        const emailSi = document.getElementById("email-si").value
        const passwordSi = document.getElementById("password-si").value

        if (getLogin && (emailSi == getLogin.email) && (passwordSi == getLogin.password)) {

            console.log(getLogin.email)

            setIsLoggedIn(true)

            localStorage.setItem("login", "true")



        } else {

            setLogin(false)

        }


        const handleReload = () => {
            window.location.reload()
        }



    }

    return (
        <div className="m-3 styling">
            {isSignedUp ? <div>
                <h2>Sign Up</h2>
                <form className="d-flex flex-column">
                    <label htmlFor="name">Name</label>
                    <input id="name"></input>
                    <label htmlFor="email">e-mail</label>
                    <input id="email"></input>
                    <label htmlFor="password">Password</label>
                    <input id="password"></input>
                    <button id="sign-up" onClick={handlesubmitSignup} className="submit-button">submit</button>
                </form>

            </div> : ""}

            {isLoggedIn ? <button onClick={() => { window.location.reload() }}><Link to="/">Go back to homepage</Link></button> : <div>

                <h2>Sign in</h2>
                <p>{isCorrectLogin ? " " : "Wrong Login details"}</p>
                <form id="sign-in" className="d-flex flex-column">
                    <label htmlFor="email-si">e-mail</label>
                    <input id="email-si"></input>
                    <label htmlFor="password-si">Password</label>
                    <input id="password-si"></input>
                    <button onClick={handlesubmitLogin} className="submit-button">submit</button>
                </form>

            </div>}


        </div>
    )

}

export default Login;