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

    async function handleSubmit() {
        await updateExerciseRec(prop.recId, editExercise)
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
            <div className="closeEditModal" onClick={() => prop.setDisplayEditModal(false)}>X</div>
            <form onSubmit={handleSubmit}>                    
                <input name='type' onChange={handleChange} type='text' placeholder="Edit type"></input>
                <input name='duration' onChange={handleChange} type='text' placeholder="Edit duration"></input>
                <input name='intensity' onChange={handleChange} type='number' placeholder="Edit intensity"></input>
                <input name='weight' onChange={handleChange} type='number' placeholder="Edit weight"></input>
                <input name='sets' onChange={handleChange} type='number' placeholder="Edit sets"></input>
                <div>
                    <h3>Upper Body</h3>
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
                <input type='submit'></input>
            </form>

        </div>
    )
}

export default EditModal