const mongoose = require('mongoose');

const bicepsExerciseSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  musclesExercised: { type: String, required: true },
  preTraining: { type: String, required: true },
  postTraining: { type: String, required: true },
  breakTime: { type: String, required: true },
  description: { type: [String], required: true },
});

module.exports = mongoose.model('BicepsExercise', bicepsExerciseSchema);