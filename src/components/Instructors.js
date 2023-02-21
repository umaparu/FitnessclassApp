import React from "react";
import "./Instructors.css";

function Instructors(props) {
    return (
        <div>
            <div className="card mb-3">
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h4 className="card-title">Your Fitness Instructor</h4>
                    <h5 className="card-text">Meet your fitness instructor, {props.name}. </h5>
                    <p className="card-text">Your instructor's speciality is {props.speciality} and they are skilled in working out {props.muscle} muscles</p>
                </div>
            </div>
        </div>
    );
}

export default Instructors;