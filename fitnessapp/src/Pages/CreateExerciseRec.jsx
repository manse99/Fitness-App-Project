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
  const [displayEditModal, setEditDisplayModal] = useState(false)

  useEffect(() => {
    getExercisesRecs()
    .then(res => {
      setExerciseRecs(res)
      console.log(exerciseRecs)
    })
  }, [refreshPage])
  
  function handleEdit(exerciseRec) {

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
    <div>
      <EditModal />
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choose Exercise"
          name="type"
          value={form.type}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter the Exercise Duration"
          name="duration"
          value={form.duration}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter a number 1 - 10"
          name="intensity"
          value={form.intensity}
          onChange={handleChange}
          />
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
        <input
          type="number"
          placeholder="Enter the number of Sets"
          name="sets"
          value={form.sets}
          onChange={handleChange}
          />
        <input
          type="number"
          placeholder="Enter Weight"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <div className="exerciseRecList">
        {exerciseRecs.map(exerciseRec => (
        <div className="exerciseRecs">
          <p>type: {exerciseRec.type}</p>
          <p>duration: {exerciseRec.duration}</p>
          <p>intensity: {exerciseRec.intensity}</p>
          <p>upper/lower: {exerciseRec.upperBody? 'upper' : 'lower'}</p>
          <p>weight: {exerciseRec.weight}</p>
          <p>sets: {exerciseRec.sets}</p>
          <button onClick={() => handleDelete(exerciseRec)}>delete</button>
          <button onClick={() => handleEdit(exerciseRec)}>edit</button>
        </div>))}
      </div>
    </div>
  );
}
