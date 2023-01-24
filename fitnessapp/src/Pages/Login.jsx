import React from 'react';
import ExerciseList from '../components/ExerciseList.jsx';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <ExerciseList />
    </div>
  );
};

export default Login;