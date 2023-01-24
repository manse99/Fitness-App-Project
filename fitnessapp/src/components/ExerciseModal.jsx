function ExerciseModal(prop) {
    return(
        <div className={prop.displayModal? "exerciseModal" : 'hideElement'}>
            <div className="closeExerciseModal" onClick={() => prop.setDisplayModal(false)}>X</div>
            <img src="" alt='img not found'></img>
            <div>Video Link</div>
            <div>Exercise Name</div>
            <div>Upper/Lower:</div>
        </div>
    )
}

export default ExerciseModal