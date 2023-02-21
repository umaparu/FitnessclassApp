import { useState } from "react"


const Exercise = (props) => {

    return(

        <div>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>{props.muscle}</p>
            <p>{props.difficulty}</p>
            <p>{props.equipment}</p>
            <p>{props.instructions}</p>
        </div>
    )

}


const User = () => {

    let[workoutRequested, setWorkoutRequested] = useState()

    let[chosenExercise, setExercise] = useState()

    const myKey = 'bt50vyiLQ7ygw35ST1J2vA==zawAz9jO5G3NBXT5'

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
          
          
          fetch(url,options)
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
            <div>User</div>
            <form>
            <input type="radio" id="biceps" name="exercise" value="biceps"></input>
            <label htmlFor="biceps">biceps</label><br></br>
            <input type="radio" id="cardio" name="exercise" value="calves"></input>
            <label htmlFor="cardio">calves</label><br></br>
            <input type="radio" id="powerlifting" name="exercise" value="triceps"></input>
            <label htmlFor="powerlifting">triceps</label>
            <button onClick={handleRequest}>Search</button>

            </form>
            {workoutRequested ? workoutRequested.map((item) => {return <Exercise key={workoutRequested.indexOf(item)} name={item.name} type={item.type} muscle={item.muscle} difficulty={item.difficulty} equipment={item.equipment} instructions={item.instructions} />}) : ""}
        </>
    )

}

export default User