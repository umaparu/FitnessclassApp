import Instructors from "./Instructors";
import InstructorHeader from "./InstructorHeader";
import instructors from "../instructors.json";
import "./Instructors.css";


const About = () => {

    return (

        <>
            <InstructorHeader />
            <div className="d-flex justify-content-around trainers">
            {
                instructors.map(instructor => (
                    <Instructors
                        id={instructor.id}
                        name={instructor.name}
                        image={instructor.image}
                        speciality={instructor.speciality}
                        muscles={instructor.muscles}
                    />
                ))}
                </div>
        </>
    )
}

export default About