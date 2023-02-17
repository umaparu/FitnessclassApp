import { Link } from "react-router-dom";
import styles from "../components/Jumbotron.css";


const Jumbotron = () => {

    return (

        <>

            <div className="jumbotron jumbotron-fluid ">
                <div className="container-fluid">
                    <div className="planbox">
                    <p className=" plantext"> New to the fitness? Or just tired of developing your own workout plan?</p>
                    <p className=" plantext"> Click below to generate your own personalised plan!</p>
                    <Link to="/user"> <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jumbotron