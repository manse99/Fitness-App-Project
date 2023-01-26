import { useState } from 'react'
import { updateExerciseRec } from '../services/records.js';

function EditModal(prop) {
    const [editExercise, setEditExercise] = useState({
        type: "",
        duration: "",
        intensity: "",
        upperBody: true,
        sets: "",
        weight: ""
    }) 

    async function handleSubmit(e) {
        e.preventDefault()
        prop.setDisplayEditModal(false)
        await updateExerciseRec(prop.recId, editExercise)
        prop.setRefreshPage(prev => prev + 1)
    }

    function handleChange(e) {
        const { name, value, type } = e.target;

        if (type === "number") {
            setEditExercise((prev) => ({
              ...prev,
              [name]: parseInt(value),
            }));
          } else if (type === "radio") {
            const str2bool = (value) => {
              if (value === "true") return true;
              if (value === "false") return false;
            };
      
            setEditExercise((prev) => ({
              ...prev,
              [name]: str2bool(value),
            }));
          }
          
          else {
            setEditExercise((prev) => ({
              ...prev,
              [name]: value,
            }));
          }
    }

    return(
        <div className={prop.displayEditModal? 'editModal' : 'hideElement'}>
            <div  className='closeBtnContainer'>
            <svg height='25' width='25' className="closeEditModal" onClick={() => prop.setDisplayEditModal(false)}>
              <line x1='0' y1='12' x2='25' y2='12' stroke='rgb(0, 100, 0)' stroke-width='3' />
            </svg>
            </div>
            <form onSubmit={handleSubmit} className='form'>                    
                <input className='editInput' name='type' onChange={handleChange} type='text' placeholder="Edit type"></input>
                <input className='editInput' name='duration' onChange={handleChange} type='text' placeholder="Edit duration"></input>
                <input className='editInput' name='intensity' onChange={handleChange} type='number' placeholder="Edit intensity"></input>
                <input className='editInput' name='weight' onChange={handleChange} type='number' placeholder="Edit weight"></input>
                <input className='editInput' name='sets' onChange={handleChange} type='number' placeholder="Edit sets"></input>
                <div>
                    <h3 className='upperLower'>Upper Body</h3>
                    <input
                    id="upperBody-true"
                    type="radio"
                    name="upperBody"
                    value="true"
                    onChange={handleChange}
                    />
                    <label htmlFor="upperBody-true">True</label>
                    <input
                    id="upperBody-false"
                    type="radio"
                    name="upperBody"
                    value="false"
                    onChange={handleChange}
                    />
                    <label htmlFor="upperBody-false">False</label>
                </div>
                <input className='buttons' type='submit'></input>
            </form>

        </div>
    )
}

export default EditModal