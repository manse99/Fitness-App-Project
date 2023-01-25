function ExerciseModal(prop) {
    return(
        <div className={prop.displayModal? "exerciseModal" : 'hideElement'}>
            <div className="closeBtnContainer">
                <div className="modalTitle">{prop.exercise.name} || {prop.exercise.upperBody? "Upper" : 'Lower'}</div>
                <svg className="closeExerciseModal" onClick={() => prop.setDisplayModal(false)}>
                <line x1='0' y1='12' x2='25' y2='12' stroke='rgb(100, 70, 0)' stroke-width='3' />
                </svg>
            </div>

            <div className="videoContainer">
            <iframe className="exerciseVid"
                src={prop.exercise.link}>
            </iframe>   
            </div>
        </div>
    )
}

export default ExerciseModal