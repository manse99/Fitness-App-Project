

import React from 'react';
import { useState, useEffect } from 'react'
import { getExercises } from '../services/exercises.js'
import ExerciseModal from '../components/ExerciseModal.jsx'
import ExerciseList from '../components/ExerciseList.jsx';

const About = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState({})

  useEffect(() => {
      fetchExercises()
  }, [])
  async function fetchExercises() {
      const allExercises = await getExercises()
      setExercises(allExercises)
  }

  return (
    <div className='about'>
      <ExerciseList setDisplayModal={setDisplayModal} exercises={exercises} setExercise={setExercise} exercise={exercise}/>
      <ExerciseModal setDisplayModal={setDisplayModal} displayModal={displayModal} exercise={exercise} setExercise={setExercise} />
    </div>
  );
};

export default About;