import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div>
        <header>
            <nav>
                <div className="title">
                    <h1>Fitness App</h1>
                    <button>
                    <div className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </button>
                </div>
                <div>
                    <Link to="/myworkouts">MyWorkouts</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/makeworkout">Make A Workout</Link>
                    <Link to="/findgym">Find a Gym</Link>
                </div>
            </nav>
        </header>
        </div>

    );
}

export default Navbar