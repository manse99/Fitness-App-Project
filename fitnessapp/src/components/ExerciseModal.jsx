function ExerciseModal(prop) {
    return(
        <div className={prop.displayModal? "exerciseModal" : 'hideElement'}>
            <div className="closeExerciseModal" onClick={() => prop.setDisplayModal(false)}>X</div>
            <div>{prop.exercise.name}</div>

            <iframe width="300" height="215"
                src={prop.exercise.link}>
            </iframe>   
            <div>Upper/Lower: {prop.exercise.upperBody? "upper" : 'lower'}</div>
        </div>
    )
}

export default ExerciseModal