const mongoose = require('./src/mongo/connection');
const ShouldersExercise = require('./src/schemas/shouldersExercise.js');

mongoose.connectDB();

const exercises = [
  {
    exercise: '',
    musclesExercised: '',
    preTraining: '',
    postTraining: '.',
    breakTime: '60-90 segundos.',
    description: [
      '',
      '',
      '',
      ''
    ]
  },
  {
    exercise: '',
    musclesExercised: '',
    preTraining: '',
    postTraining: '.',
    breakTime: '60-90 segundos.',
    description: [
      '',
      '',
      '',
      ''
    ]
  },
];



const loadExercises = async () => {
  try {
    await ShouldersExercise.insertMany(exercises);
    console.log('Exercises inserted!');
    await mongoose.disconnectDB();
  } catch (err) {
    console.error('Error inserting exercises:', err);
    await mongoose.disconnectDB();
  }
};

loadExercises();