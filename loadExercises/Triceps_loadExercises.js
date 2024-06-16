const mongoose = require('./src/mongo/connection');
const TricepsExercise = require('./src/schemas/tricepsExercise');

mongoose.connectDB();

const exercises = [
  {
    exercise: 'Press francés',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos..',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra.',
      'Sujeta la barra con un agarre estrecho, las palmas mirando hacia adelante.',
      'Baja la barra hacia tu frente doblando los codos.',
      'Extiende los codos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones de tríceps en polea',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una barra recta.',
      'Sujeta la barra con un agarre prono (palmas hacia abajo).',
      'Mantén los codos cerca del cuerpo mientras empujas la barra hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa la barra a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Fondos en paralelas',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Sujétate a las barras paralelas con los brazos extendidos y las piernas colgando.',
      'Baja el cuerpo doblando los codos hasta que los brazos formen un ángulo de 90 grados.',
      'Empuja hacia arriba extendiendo los brazos para volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones de tríceps con mancuernas',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con respaldo y toma una mancuerna con ambas manos.',
      'Levanta la mancuerna por encima de la cabeza con los brazos extendidos.',
      'Baja la mancuerna detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Patada de tríceps',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Apóyate con una mano y una rodilla en un banco plano.',
      'Sujeta una mancuerna con la otra mano, con el codo doblado a 90 grados.',
      'Extiende el codo para llevar la mancuerna hacia atrás hasta que el brazo esté completamente extendido.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Press de banca con agarre cerrado',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral mayor y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra.',
      'Sujeta la barra con un agarre estrecho, con las manos separadas a una distancia de unos 15-20 cm.',
      'Baja la barra hacia el pecho manteniendo los codos cerca del cuerpo.',
      'Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos.'
    ]
  },
  {
    exercise: 'Extensiones de tríceps por encima de la cabeza',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con respaldo y toma una mancuerna con ambas manos.',
      'Levanta la mancuerna por encima de la cabeza con los brazos extendidos.',
      'Baja la mancuerna detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Rompecráneos (Skull Crushers)',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra EZ o mancuernas.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones en máquina',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de extensiones de tríceps.',
      'Ajusta el asiento y los brazos de la máquina según sea necesario.',
      'Empuja las empuñaduras hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones con cuerda en polea',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una cuerda.',
      'Sujeta la cuerda con ambas manos con las palmas enfrentadas.',
      'Empuja la cuerda hacia abajo hasta que los brazos estén completamente extendidos, separando los extremos de la cuerda al final del movimiento.',
      'Regresa la cuerda a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Press de banca con agarre cerrado en Smith',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral mayor y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano debajo de una máquina Smith.',
      'Sujeta la barra con un agarre estrecho, con las manos separadas a una distancia de unos 15-20 cm.',
      'Baja la barra hacia el pecho manteniendo los codos cerca del cuerpo.',
      'Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos.'
    ]
  },
  {
    exercise: 'Extensiones en polea alta',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una barra recta.',
      'Sujeta la barra con un agarre prono (palmas hacia abajo).',
      'Mantén los codos cerca del cuerpo mientras empujas la barra hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa la barra a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en polea baja',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea baja con una barra recta.',
      'Sujeta la barra con un agarre supino (palmas hacia arriba).',
      'Mantén los codos cerca del cuerpo mientras empujas la barra hacia arriba hasta que los brazos estén completamente extendidos.',
      'Mantén los codos cerca del cuerpo',
      'Regresa la barra a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones con barra Z',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra Z.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones con barra recta',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra recta.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones con mancuernas alterno',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con respaldo y toma una mancuerna con una mano.',
      'Levanta la mancuerna por encima de la cabeza con el brazo extendido.',
      'Baja la mancuerna detrás de la cabeza doblando el codo.',
      'Extiende el brazo para regresar a la posición inicial.',
      'Repite con el otro brazo.'
    ]
  },
  {
    exercise: 'Extensiones con mancuernas simultáneo',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco con respaldo y toma una mancuerna en cada mano.',
      'Levanta las mancuernas por encima de la cabeza con los brazos extendidos.',
      'Baja las mancuernas detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones en banco inclinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una barra Z o mancuernas.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones en banco declinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco declinado con una barra Z o mancuernas.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Fondos en banco',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en el borde de un banco plano con las manos apoyadas a los lados del cuerpo.',
      'Deslízate del banco con los pies extendidos delante de ti.',
      'Baja el cuerpo doblando los codos hasta que los brazos formen un ángulo de 90 grados.',
      'Empuja hacia arriba extendiendo los brazos para volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Fondos asistidos en máquina',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate en la plataforma de una máquina de fondos asistidos y coloca las rodillas en el soporte.',
      'Sujeta las barras paralelas con las manos y baja el cuerpo doblando los codos.',
      'Empuja hacia arriba extendiendo los brazos para volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones de tríceps con banda de resistencia',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Sujeta una banda de resistencia con ambas manos y levántala por encima de la cabeza.',
      'Mantén un brazo estático y baja la banda doblando el codo del otro brazo.',
      'Extiende el brazo para regresar a la posición inicial.',
      'Repite con el otro brazo.'
    ]
  },
  {
    exercise: 'Patada de tríceps con banda de resistencia',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Sujeta una banda de resistencia con una mano y coloca la otra mano en tu rodilla para mantener la estabilidad.',
      'Inclina el torso hacia adelante y extiende el brazo hacia atrás contra la resistencia de la banda.',
      'Regresa a la posición inicial doblando el codo.',
      'Repite con el otro brazo.'
    ]
  },
  {
    exercise: 'Press francés con barra Z',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra Z.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Press francés con barra recta',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una barra recta.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Press francés con mancuernas',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una mancuerna en cada mano.',
      'Sujeta las mancuernas con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja las mancuernas hacia la frente doblando los codos.',
      'Extiende los brazos para levantar las mancuernas de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Press francés en banco inclinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco inclinado con una barra Z o mancuernas.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Press francés en banco declinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco declinado con una barra Z o mancuernas.',
      'Sujeta la barra con las palmas hacia arriba y los brazos extendidos sobre el pecho.',
      'Baja la barra hacia la frente doblando los codos.',
      'Extiende los brazos para levantar la barra de nuevo a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con cuerda',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Sujeta una cuerda en una polea alta y colócate de espaldas a la máquina.',
      'Levanta la cuerda por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja la cuerda detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con banda elástica',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Sujeta una banda elástica con ambas manos y colócate de espaldas a un punto de anclaje bajo.',
      'Levanta la banda por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja la banda detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con barra Z',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco y sujeta una barra Z con ambas manos.',
      'Levanta la barra por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja la barra detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con barra recta',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco y sujeta una barra recta con ambas manos.',
      'Levanta la barra por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja la barra detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con mancuernas',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco y sujeta una mancuerna con ambas manos.',
      'Levanta la mancuerna por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja la mancuerna detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones por encima de la cabeza con Kettlebell',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco y sujeta un kettlebell con ambas manos.',
      'Levanta el kettlebell por encima de la cabeza con los codos apuntando hacia adelante.',
      'Baja el kettlebell detrás de la cabeza doblando los codos.',
      'Extiende los brazos para regresar a la posición inicial.'
    ]
  },
  {
    exercise: 'Extensiones en polea con cuerda',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una cuerda.',
      'Sujeta la cuerda con ambas manos y mantén los codos pegados al cuerpo.',
      'Empuja la cuerda hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en polea con barra recta',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una barra recta.',
      'Sujeta la barra con ambas manos y mantén los codos pegados al cuerpo.',
      'Empuja la barra hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en polea con barra Z',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una barra Z.',
      'Sujeta la barra con ambas manos y mantén los codos pegados al cuerpo.',
      'Empuja la barra hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en polea con mancuernas',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una mancuerna.',
      'Sujeta la mancuerna con ambas manos y mantén los codos pegados al cuerpo.',
      'Empuja la mancuerna hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en polea con banda elástica',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta con una banda elástica.',
      'Sujeta la banda con ambas manos y mantén los codos pegados al cuerpo.',
      'Empuja la banda hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Fondos en máquina Cybex',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Cybex y ajusta los apoyos para los pies y las manos.',
      'Sujeta las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Fondos en máquina Hammer Strength',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Hammer Strength y ajusta los apoyos para los pies y las manos.',
      'Sujeta las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Fondos en máquina Marcy',
    musclesExercised: 'Principalmente el tríceps braquial, secundariamente el pectoral y los deltoides.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Marcy y ajusta los apoyos para los pies y las manos.',
      'Sujeta las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en máquina de tríceps',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de tríceps con el respaldo ajustado.',
      'Agarra las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en máquina de predicador',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de predicador con los brazos apoyados en el cojín acolchado.',
      'Agarra las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en máquina de banco inclinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de banco inclinado con el respaldo ajustado.',
      'Agarra las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en máquina de banco declinado',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de banco declinado con el respaldo ajustado.',
      'Agarra las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Extensiones en máquina con banda elástica',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina con banda elástica y ajusta la resistencia adecuada.',
      'Agarra las asas y empuja hacia abajo hasta que los brazos estén completamente extendidos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Patada de tríceps en máquina',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de patada de tríceps y ajusta el respaldo.',
      'Coloca los antebrazos sobre los apoyos y extiende los brazos hacia atrás.',
      'Flexiona los codos para llevar los antebrazos hacia adelante.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Patada de tríceps en polea',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Párate frente a una polea alta y sujeta una cuerda o una barra con ambas manos.',
      'Flexiona los codos y lleva los antebrazos hacia adelante.',
      'Extiende los brazos hacia atrás para realizar la extensión del tríceps.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Patada de tríceps con barra',
    musclesExercised: 'Principalmente el tríceps braquial.',
    preTraining: 'Realiza rotaciones de muñecas y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los tríceps levantando el brazo y doblándolo detrás de la cabeza, tirando del codo con la otra mano.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en un banco y sujeta una barra con ambas manos por detrás de la cabeza.',
      'Flexiona los codos y lleva la barra hacia arriba.',
      'Extiende los brazos para levantar la barra hacia atrás.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  }
];



const loadExercises = async () => {
  try {
    await TricepsExercise.insertMany(exercises);
    console.log('Exercises inserted!');
    await mongoose.disconnectDB();
  } catch (err) {
    console.error('Error inserting exercises:', err);
    await mongoose.disconnectDB();
  }
};

loadExercises();