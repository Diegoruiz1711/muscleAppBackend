const mongoose = require('./src/mongo/connection');
const BicepsExercise = require('./src/schemas/bicepsExercise');

mongoose.connectDB();

const exercises = [
  {
    exercise: 'Curl con barra',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros.',
      'Agarra la barra con las palmas hacia arriba (supinación), manos separadas al ancho de los hombros.',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con mancuernas',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una mancuerna en cada mano.',
      'Mantén los codos pegados al torso.',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco Scott',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en el banco Scott, con los brazos extendidos sobre el cojín del banco.',
      'Agarra la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl concentrado con mancuerna',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco, con los pies firmemente en el suelo.',
      'Sostén una mancuerna con una mano y apoya el codo contra el interior del muslo.',
      'Flexiona el codo para levantar la mancuerna hacia el hombro.',
      'Baja la mancuerna de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl concentrado con polea',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con las piernas separadas.',
      'Sostén una polea con la mano en supinación.',
      'Apoya el codo de la mano a trabajar en la parte interna del muslo opuesto.',
      'Flexiona el codo para levantar la polea hacia el hombro.',
      'Baja la polea de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en máquina',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de curl, ajustando el asiento y los apoyos a tu altura.',
      'Agarra las asas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en polea baja',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea baja, con los pies a la altura de los hombros.',
      'Agarra la barra de la polea con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl martillo con mancuernas',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una mancuerna en cada mano.',
      'Mantén los codos pegados al torso y las palmas mirando hacia el torso (agarre neutro).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl spider',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate boca abajo en un banco inclinado, con los brazos colgando hacia abajo.',
      'Agarra una barra o mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de arrastre',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una barra en las manos con las palmas hacia arriba (supinación).',
      'Flexiona los codos mientras arrastras la barra hacia arriba, cerca del cuerpo.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: '21s (curl de 21 repeticiones)',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una barra en las manos con las palmas hacia arriba (supinación).',
      'Realiza 7 repeticiones desde la posición inicial hasta la mitad del movimiento (ángulo de 90 grados).',
      'Realiza 7 repeticiones desde la mitad del movimiento hasta la posición final.',
      'Realiza 7 repeticiones completas.'
    ]
  },
  {
    exercise: 'Curl Zottman',
    musclesExercised: 'Principalmente el bíceps braquial, el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una mancuerna en cada mano.',
      'Realiza un curl con las palmas hacia arriba (supinación).',
      'En la parte superior del movimiento, gira las muñecas para que las palmas queden hacia abajo (pronación).',
      'Baja las mancuernas con las palmas hacia abajo.',
      'Gira las muñecas nuevamente para que las palmas queden hacia arriba y vuelve a la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con banda de resistencia',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate sobre una banda de resistencia con los pies a la altura de los hombros.',
      'Sostén los extremos de la banda con las manos, palmas hacia arriba.',
      'Flexiona los codos para levantar las manos hacia los hombros.',
      'Baja las manos de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con barra EZ',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros.',
      'Agarra la barra EZ con las palmas hacia arriba (supinación) en las partes curvas de la barra.',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con barra recta',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros.',
      'Agarra la barra con las palmas hacia arriba (supinación), manos separadas al ancho de los hombros.',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con barra Z',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra Z en las manos.',
      'Sostén la barra Z con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra Z hacia los hombros.',
      'Baja la barra Z de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con mancuernas alterno',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una mancuerna en cada mano.',
      'Flexiona un codo para levantar una mancuerna hacia el hombro, mientras mantienes el otro brazo extendido.',
      'Baja la mancuerna de manera controlada mientras flexionas el otro codo para levantar la otra mancuerna.',
      'Alterna los brazos en cada repetición.'
    ]
  },
  {
    exercise: 'Curl con mancuernas simultáneo',
    musclesExercised: 'Principalmente el bíceps braquial, también se activan el braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con los pies a la altura de los hombros, una mancuerna en cada mano.',
      'Flexiona ambos codos simultáneamente para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en predicador',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en el banco predicador, con los brazos extendidos sobre el cojín del banco.',
      'Agarra la barra o mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con cuerda en polea',
    musclesExercised: 'Principalmente el bíceps braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea baja con una cuerda adjunta.',
      'Agarra los extremos de la cuerda con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar la cuerda hacia los hombros.',
      'Baja la cuerda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de martillo en polea',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea baja con una cuerda adjunta.',
      'Agarra los extremos de la cuerda con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar la cuerda hacia los hombros.',
      'Baja la cuerda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración en polea',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate frente a una polea baja, con el brazo extendido y el codo apoyado en el muslo.',
      'Agarra la cuerda o el asa con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar el peso hacia el hombro.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración en banco',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco, con el brazo extendido y el codo apoyado en el muslo.',
      'Sostén una mancuerna con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar la mancuerna hacia el hombro.',
      'Baja la mancuerna de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración en banco Scott',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco Scott, con el brazo extendido y el codo apoyado en el cojín del banco.',
      'Sostén una mancuerna con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar la mancuerna hacia el hombro.',
      'Baja la mancuerna de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración en máquina',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de curl de concentración, ajustando el asiento y el cojín a tu altura.',
      'Sostén el asa con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar el peso hacia el hombro.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración en predicador',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco predicador, con el brazo extendido sobre el cojín del banco.',
      'Sostén una mancuerna con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar la mancuerna hacia el hombro.',
      'Baja la mancuerna de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración con barra',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con la barra en las manos, los codos apoyados en los muslos.',
      'Agarra la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración con mancuernas',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas, estiramientos dinámicos de brazos y algunos curls con poco peso.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con el codo apoyado en el muslo.',
      'Sostén una mancuerna con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar la mancuerna hacia el hombro.',
      'Baja la mancuerna de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración con banda elástica',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con el codo apoyado en el muslo, sosteniendo una banda elástica.',
      'Sostén el extremo de la banda con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar la banda hacia el hombro.',
      'Baja la banda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco inclinado',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco inclinado con mancuernas',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco inclinado con barra',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una barra en las manos.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco inclinado con barra EZ',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una barra EZ en las manos.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en banco inclinado con banda elástica',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una banda elástica en las manos.',
      'Sostén los extremos de la banda con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la banda hacia los hombros.',
      'Baja la banda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de arrastre con mancuernas',
    musclesExercised: 'Principalmente el bíceps braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros, deslizando los codos hacia atrás.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.',
    ]
  },
  {
    exercise: 'Curl de arrastre con barra',
    musclesExercised: 'Principalmente el bíceps braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra en las manos.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros, deslizando los codos hacia atrás.',
      'Baja la barra de manera controlada hasta la posición inicial.',
    ]
  },
  {
    exercise: 'Curl de arrastre con barra EZ',
    musclesExercised: 'Principalmente el bíceps braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra EZ en las manos.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la barra hacia los hombros, deslizando los codos hacia atrás.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de arrastre con banda elástica',
    musclesExercised: 'Principalmente el bíceps braquial y el braquiorradial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una banda elástica en las manos.',
      'Sostén los extremos de la banda con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar la banda hacia los hombros, deslizando los codos hacia atrás.',
      'Baja la banda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en máquina de predicador',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de curl de predicador, ajustando el asiento y el cojín a tu altura.',
      'Sostén las asas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en máquina de concentración',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de curl de concentración, ajustando el asiento y el cojín a tu altura.',
      'Sostén el asa con la palma hacia arriba (supinación).',
      'Flexiona el codo para levantar el peso hacia el hombro.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en máquina de martillo',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de curl de martillo, ajustando el asiento y el cojín a tu altura.',
      'Sostén las asas con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.',
    ]
  },
  {
    exercise: 'Curl con polea baja',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate frente a una polea baja con una barra o cuerda.',
      'Sostén la barra o cuerda con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con polea alta',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate frente a una polea alta con una barra o cuerda.',
      'Sostén la barra o cuerda con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de concentración con barra',
    musclesExercised: 'Principalmente el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con las piernas separadas.',
      'Sostén una barra con las manos en supinación.',
      'Apoya el codo de la mano a trabajar en la parte interna del muslo opuesto.',
      'Flexiona el codo para levantar la barra hacia el hombro.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de araña con mancuernas',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas hacia abajo (agarre pronado).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros, manteniendo los codos cerca del torso.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en máquina de banco inclinado',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en la máquina de curl de banco inclinado, ajustando el asiento y el cojín a tu altura.',
      'Sostén las asas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para levantar el peso hacia los hombros.',
      'Baja el peso de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con agarre inverso',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra en las manos.',
      'Sostén la barra con las palmas hacia abajo (pronación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con agarre inverso',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra en las manos.',
      'Sostén la barra con las palmas hacia abajo (pronación).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl de bíceps martillo con barra Romana',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra en las manos.',
      'Sostén la barra con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
        ]
  },
  {
    exercise: 'Curl de bíceps martillo con barra EZ',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una barra EZ en las manos.',
      'Sostén la barra con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con mancuernas en pronación',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas hacia abajo (pronación).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl con mancuernas en agarre neutro',
    musclesExercised: 'Principalmente el braquiorradial y el bíceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho con una mancuerna en cada mano.',
      'Sostén las mancuernas con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para levantar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en polea baja con cuerda',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho frente a una polea baja con una cuerda.',
      'Sostén la cuerda con las palmas enfrentadas (agarre neutro).',
      'Flexiona los codos para llevar la cuerda hacia los hombros.',
      'Baja la cuerda de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en polea baja con barra recta',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho frente a una polea baja con una barra recta.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para llevar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en polea baja con barra EZ',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho frente a una polea baja con una barra EZ.',
      'Sostén la barra con las palmas hacia arriba (supinación).',
      'Flexiona los codos para llevar la barra hacia los hombros.',
      'Baja la barra de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Curl en polea baja con mancuernas',
    musclesExercised: 'Principalmente el bíceps braquial y el braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los bíceps extendiendo el brazo hacia atrás y apoyándolo contra una pared, girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate derecho frente a una polea baja con mancuernas.',
      'Sostén las mancuernas con las palmas hacia arriba (supinación).',
      'Flexiona los codos para llevar las mancuernas hacia los hombros.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  }
];



const loadExercises = async () => {
  try {
    await BicepsExercise.insertMany(exercises);
    console.log('Exercises inserted!');
    await mongoose.disconnectDB();
  } catch (err) {
    console.error('Error inserting exercises:', err);
    await mongoose.disconnectDB();
  }
};

loadExercises();