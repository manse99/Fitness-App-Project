

import React from 'react';
import { useState, useEffect } from 'react'
import { getExercises } from '../services/exercises.js'
import ExerciseModal from '../components/ExerciseModal.jsx'

const About = () => {
  return (
    <div className='about'>
      <ExerciseModal />
    </div>
  );
};

export default About;