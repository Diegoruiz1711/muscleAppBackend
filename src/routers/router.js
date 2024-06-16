const express = require('express');
const router = express.Router();
const chestExercisesController = require('../controllers/chestExercisesController');

// Define your routes here
router.get('/exercises', chestExercisesController.getExercises);
router.post('/exercises', chestExercisesController.addExercise);

module.exports = router;