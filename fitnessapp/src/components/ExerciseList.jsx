import { getExercises } from "../services/exercises.js"
import { useState, useEffect } from 'react'
import About from '../Pages/About.jsx'


function ExerciseList(prop) {
    if (!prop.exercises.length) return <h1>Loading...</h1>
    return(
        <div className='exerciseList'>
            {prop.exercises.map((exercise) => (<div>
                <img className="aboutImg" onClick={() => {
                    prop.setDisplayModal(true)
                    prop.setExercise(exercise)
                    }} src={exercise.imgUrl}></img>
            </div>))}
        </div>
    )
}
export default ExerciseList