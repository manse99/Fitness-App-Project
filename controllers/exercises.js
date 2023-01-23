import Exercise from '../models/exercises.js';

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findById(id);

    if (exercise) {
      return res.json(exercise);
    }

    res.status(404).json({ message: 'Exercise not found!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(201).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await Exercise.findByIdAndUpdate(id, req.body);
    res.status(201).json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Exercise.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send('Exercise deleted!');
    }

    throw new Error('Exercise not found');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
