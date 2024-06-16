const ChestExercise = require('../schemas/chestExercise');

const getExercises = async (req, res) => {
  try {
    const exercises = await ChestExercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addExercise = async (req, res) => {
  const exercise = new ChestExercise({
    exercise: req.body.exercise,
  });

  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getExercises, addExercise };