import { useState, useEffect } from "react";
import {createExerciseRec, getExercisesRecs, deleteExerciseRec, updateExerciseRec } from "../services/records.js"
import {useNavigate} from "react-router-dom";
import EditModal from "../components/EditModal.jsx";

export default function CreateExerciseRec() {
  const [form, setForm] = useState({
    type: "",
    duration: "",
    intensity: "",
    upperBody: true,
    sets: "",
    weight: "",
  });
  const [exerciseRecs, setExerciseRecs] = useState([])
  const [refreshPage, setRefreshPage] = useState(0)
  const [displayEditModal, setDisplayEditModal] = useState(false)
  const [recId, setRecId] = useState('')

  useEffect(() => {
    getExercisesRecs()
    .then(res => {
      setExerciseRecs(res)
    })
  }, [refreshPage])
  
  function handleEdit(exerciseRec) {
    setDisplayEditModal(true)
    setRecId(exerciseRec._id)
  }

  async function handleDelete(exerciseRec) {
    await deleteExerciseRec(exerciseRec._id)
    setRefreshPage(prev => (prev + 1))
  }

  function handleChange(e) {
    const { name, value, type } = e.target;

    if (type === "number") {
      setForm((prev) => ({
        ...prev,
        [name]: parseInt(value),
      }));
    } else if (type === "radio") {
      const str2bool = (value) => {
        if (value === "true") return true;
        if (value === "false") return false;
      };

      setForm((prev) => ({
        ...prev,
        [name]: str2bool(value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

 async  function handleSubmit(e) {
    e.preventDefault();
    await createExerciseRec(form)
    setRefreshPage(prev => (prev + 1))
  }


  return (
    <div className="addExercisePage">
      <EditModal setRefreshPage={setRefreshPage} recId={recId} displayEditModal={displayEditModal} setDisplayEditModal={setDisplayEditModal} />
      <h1 className="createTitle">Add Exercise</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          name="type"
          value={form.type}
          onChange={handleChange}
          className='createInput'
        />
        <input
          type="number"
          placeholder="Duration"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className='createInput'
        />
        <input
          type="number"
          placeholder="Intensity: 1-10"
          name="intensity"
          value={form.intensity}
          onChange={handleChange}
          className='createInput'
          />

        <input
          type="number"
          placeholder="Sets"
          name="sets"
          value={form.sets}
          onChange={handleChange}
          className='createInput'
          />
        <input
          type="number"
          placeholder="Weight"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          className='createInput'
        />
        <div>
        <p className="upperLower">Upper Body</p>
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
        <button className="buttons" type="submit">Add</button>
      </form>
      
      <div className="exerciseRecList">
        {exerciseRecs.map(exerciseRec => (
        <div className="exerciseRecs">
          <table className="exerciseTable">
            <tbody>
              <tr>
                <th className="keys">TYPE</th>
                <td className="values">{exerciseRec.type}</td>
              </tr>
              <tr>
                <th className="keys">DURATION</th>
                <td className="values">{exerciseRec.duration}</td>
              </tr>
              <tr>
                <th className="keys">INTENSITY</th>
                <td className="values">{exerciseRec.intensity}</td>
              </tr>
              <tr>
                <th className="keys">UPPER/LOWER</th>
                <td className="values">{exerciseRec.upperBody? 'Upper' : 'Lower'}</td>
              </tr>
              <tr>
                <th className="keys">WEIGHT</th>
                <td className="values">{exerciseRec.weight}</td>
              </tr>
              <tr>
                <th className="keys">SETS</th>
                <td className="values">{exerciseRec.sets}</td>
              </tr>
            </tbody>
          </table>
          <button className="buttons" onClick={() => handleDelete(exerciseRec)}>Delete</button>
          <button className="buttons" onClick={() => handleEdit(exerciseRec)}>Edit</button>
        </div>))}
      </div>
    </div>
  );
}
