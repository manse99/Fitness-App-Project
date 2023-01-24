import ExerciseRec from '../models/exerciseRec.js';

export const getExerciseRecs = async (req, res) => {
  try {
    const exerciseRecs = await ExerciseRec.find();
    res.json(exerciseRecs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getExerciseRec = async (req, res) => {
  try {
    const { id } = req.params;
    const exerciseRecs = await ExerciseRec.findById(id);

    if (exerciseRecs) {
      return res.json(exerciseRecs);
    }

    res.status(404).json({ message: 'Exercise Record not found!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createExerciseRec = async (req, res) => {
  try {
    const exerciseRec = new ExerciseRec(req.body);
    await exerciseRec.save();
    res.status(201).json(exerciseRec);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateExerciseRec = async (req, res) => {
  try {
    const { id } = req.params;
    const exerciseRec = await ExerciseRec.findByIdAndUpdate(id, req.body);
    res.status(201).json(exerciseRec);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteExerciseRec = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ExerciseRec.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send('Exercise Record deleted!');
    }

    throw new Error('Exercise Record not found');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
