import { useState } from "react"

import './user.css'


const Exercise = (props) => {

    const saveExercise = () => {
        let getExercise = JSON.parse(localStorage.getItem("exercises"));
        if (getExercise) {
            getExercise.push(myWorkout);
            localStorage.setItem("exercises", JSON.stringify(getExercise))
        }
        else {
            localStorage.setItem("exercises", JSON.stringify([myWorkout]))
        }

    }

    let myWorkout = {
        name: props.name,
        type: props.type,
        muscle: props.muscle,
        difficulty: props.difficulty,
        equipment: props.equipment,
        instructions: props.instructions
    }

    return (

        <div className="exercise">
            <p>Exercise Name: {props.name}</p>
            <p>Exercise Type: {props.type}</p>
            <p>Muscle Worked: {props.muscle}</p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Equipment: {props.equipment}</p>
            <p> Exercise Instructions: {props.instructions}</p>
            <button onClick={saveExercise} className="add-exercise">Save Exercise</button>
        </div>
    )

}

// key={exerciseList.indexOf(item)} name={item.name} type={item.type} muscle={item.muscle} difficulty={item.difficulty} equipment={item.equipment} instructions={item.instructions}

const ExerciseEntry = (props) => {
    return (
        <div className="exercise-list">
            <p>Exercise Name: {props.name}</p>
            <p>Exercise Type: {props.type}</p>
            <p>Muscle Worked: {props.muscle}</p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Equipment: {props.equipment}</p>
            <p> Exercise Instructions: {props.instructions}</p>
        </div>
    )
}

const Workout = () => {

    let exerciseList = JSON.parse(localStorage.getItem('exercises'))
    console.log(exerciseList)
    if (exerciseList) {
        return <div>{exerciseList.map((item) => { return <ExerciseEntry key={exerciseList.indexOf(item)} name={item.name} type={item.type} muscle={item.muscle} difficulty={item.difficulty} equipment={item.equipment} instructions={item.instructions} /> })}</div>
    }
    else {
        return <div>No exercises</div>
    }

};


const User = () => {

    let [workoutRequested, setWorkoutRequested] = useState()

    let [chosenExercise, setExercise] = useState()

    const myKey = 'bt50vyiLQ7ygw35ST1J2vA==zawAz9jO5G3NBXT5'

    let [isDisplayed, setDisplayed] = useState(false);

    const displayWorkout = () => {

        if (isDisplayed) {
            setDisplayed(false)
        }
        else {
            setDisplayed(true)
        }

    }

    const handleRequest = (event) => {

        event.preventDefault();

        let exerciseSelected = document.querySelector('input[name="exercise"]:checked').value
        console.log(exerciseSelected)
        setExercise(exerciseSelected);

        let options = {
            method: 'GET',
            headers: { 'x-api-key': myKey }
        }

        let url = `https://api.api-ninjas.com/v1/exercises?muscle=${exerciseSelected}`

        console.log(url)


        fetch(url, options)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data)
                setWorkoutRequested(data)
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

    }


    return (
        <>

            {isDisplayed ? <Workout /> : " "}
            <div className="userInstruction">
                <h3>Select a workout to perform</h3>
            </div>
            <form className="search-form">
                <input type="radio" id="biceps" name="exercise" value="biceps"></input>
                <label htmlFor="biceps">biceps</label><br></br>
                <input type="radio" id="cardio" name="exercise" value="calves"></input>
                <label htmlFor="cardio">calves</label><br></br>
                <input type="radio" id="powerlifting" name="exercise" value="triceps"></input>
                <label htmlFor="powerlifting">triceps</label>
            </form>
            <button onClick={handleRequest} className="search-button">Search</button>

            <button onClick={displayWorkout} className="display-workout">Display my workout</button>


            {workoutRequested ? workoutRequested.map((item) => { return <Exercise key={workoutRequested.indexOf(item)} name={item.name} type={item.type} muscle={item.muscle} difficulty={item.difficulty} equipment={item.equipment} instructions={item.instructions} /> }) : ""}
        </>
    )

}

export default User