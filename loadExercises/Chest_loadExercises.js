const mongoose = require('./src/mongo/connection');
const ChestExercise = require('./src/schemas/chestExercise');

mongoose.connectDB();

const exercises = [
  {
    exercise: 'Press de banca',
    musclesExercised: 'Principalmente el pectoral mayor, también se activan el deltoides anterior y el tríceps braquial.',
    preTraining: 'Realiza rotaciones de brazos, estiramientos dinámicos del pecho y algunos press de banca con poco peso.',
    postTraining: 'Estira los pectorales haciendo estiramientos en puerta o apoyando los brazos en una pared y girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano.',
      'Agarra la barra con las manos un poco más anchas que el ancho de los hombros.',
      'Baja la barra hasta tocar ligeramente el pecho.',
      'Empuja la barra hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Press inclinado',
    musclesExercised: 'Parte superior del pectoral mayor.',
    preTraining: 'Realiza rotaciones de hombros y algunos press con peso ligero en banco inclinado.',
    postTraining: 'Estiramientos de pecho en puerta, enfocados en la parte superior del pecho.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta el banco a una inclinación de 30-45 grados.',
      'Acuéstate y agarra la barra como en el press de banca.',
      'Baja la barra hacia la parte superior del pecho.',
      'Empuja hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Press declinado',
    musclesExercised: 'Parte inferior del pectoral mayor.',
    preTraining: 'Movimientos de brazos y algunos press con peso ligero en banco declinado.',
    postTraining: 'Estiramientos de pecho en puerta, enfocados en la parte inferior del pecho.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta el banco a una declinación de 15-30 grados.',
      'Acuéstate y agarra la barra con las manos un poco más anchas que el ancho de los hombros.',
      'Baja la barra hacia la parte inferior del pecho.',
      'Empuja hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Aperturas con mancuernas',
    musclesExercised: 'Pectoral mayor, especialmente las fibras externas.',
    preTraining: 'Movimientos de brazos y algunas series ligeras de aperturas.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Acuéstate en un banco plano con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas enfrentadas.',
      'Abre los brazos hacia los lados en un movimiento de arco, manteniendo los codos ligeramente doblados.',
      'Regresa a la posición inicial.'
    ]
  },
  {
    exercise: 'Aperturas en banco declinado',
    musclesExercised: 'Pectoral mayor, especialmente las fibras inferiores.',
    preTraining: 'Movimientos de brazos y algunas series ligeras de aperturas.',
    postTraining: 'Estiramientos de pecho en puerta, enfocados en la parte inferior del pecho.',
    breakTime: '45-60 segundos.',
    description: [
      'Ajusta el banco a una declinación de 15-30 grados.',
      'Acuéstate con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas enfrentadas.',
      'Abre los brazos hacia los lados en un movimiento de arco, manteniendo los codos ligeramente doblados.'
    ]
  },
  {
    exercise: 'Pullover',
    musclesExercised: 'Pectoral mayor y dorsal ancho.',
    preTraining: 'Movilidad de hombros y algunas series ligeras de pullover con mancuernas.',
    postTraining: 'Estiramiento de pectorales y dorsales extendiendo los brazos y arqueando la espalda.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate perpendicularmente a un banco con solo los hombros apoyados.',
      'Sostén una mancuerna con ambas manos sobre el pecho.',
      'Baja la mancuerna detrás de la cabeza en un movimiento de arco.',
      'Regresa a la posición inicial sobre el pecho.'
    ]
  },
  {
    exercise: 'Fondos en paralelas',
    musclesExercised: 'Pectoral mayor, tríceps y deltoides anterior.',
    preTraining: 'Rotaciones de hombros, estiramientos de tríceps y algunos fondos con asistencia.',
    postTraining: 'Estiramientos de tríceps y pecho en una puerta.',
    breakTime: '60-90 segundos.',
    description: [
      'Abre las barras paralelas de la máquina para ejercitar pectorales',
      'Sostén las barras paralelas y levántate con los brazos extendidos.',
      'Baja el cuerpo doblando los codos hasta que los hombros estén ligeramente por debajo de los codos.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Press de banca con mancuernas',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, estiramientos dinámicos del pecho y algunas series ligeras con mancuernas.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas hacia adelante.',
      'Baja las mancuernas hasta que los codos estén a 90 grados.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Aperturas en máquina (Pec Deck)',
    musclesExercised: 'Pectoral mayor, fibras externas.',
    preTraining: 'Movimientos de brazos y algunas series ligeras en la máquina Pec Deck.',
    postTraining: 'Estiramientos de pecho en una puerta o empujando los brazos contra una pared.',
    breakTime: '45-60 segundos.',
    description: [
      'Siéntate en la máquina Pec Deck.',
      'Coloca los brazos en las almohadillas, con los codos ligeramente doblados.',
      'Junta los brazos frente al pecho.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de pecho en máquina',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Rotaciones de hombros, estiramientos dinámicos del pecho y algunas series ligeras en la máquina de press de pecho.',
    postTraining: 'Estiramientos de pecho en una puerta o empujando los brazos contra una pared.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina de press de pecho.',
      'Agarra las manijas con las manos un poco más anchas que el ancho de los hombros.',
      'Empuja las manijas hacia adelante hasta extender los brazos.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Press en máquina Smith',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Rotaciones de hombros, movimientos de pecho y algunas series ligeras en la máquina Smith.',
    postTraining: 'Estiramientos de pecho en puerta o apoyando los brazos en una pared y girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta la barra de la máquina Smith a la altura adecuada.',
      'Acuéstate en un banco plano y agarra la barra con las manos un poco más anchas que el ancho de los hombros.',
      'Baja la barra hasta tocar ligeramente el pecho.',
      'Empuja la barra hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Press con banda de resistencia',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos y algunos press ligeros con la banda de resistencia.',
    postTraining: 'Estiramientos de pecho en puerta o empujando los brazos contra una pared.',
    breakTime: '45-60 segundos.',
    description: [
      'Ancla la banda de resistencia a un punto fijo.',
      'Sostén los extremos de la banda con las manos.',
      'Empuja la banda hacia adelante hasta extender los brazos.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de banca con agarre cerrado',
    musclesExercised: 'Pectoral mayor, tríceps braquial.',
    preTraining: 'Movimientos de brazos, estiramientos de tríceps y algunas series ligeras con barra.',
    postTraining: 'Estiramientos de tríceps y pecho en una puerta.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano.',
      'Agarra la barra con las manos al ancho de los hombros.',
      'Baja la barra hasta tocar ligeramente el pecho.',
      'Empuja la barra hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Fondos asistidos en máquina',
    musclesExercised: 'Pectoral mayor, tríceps, deltoides anterior.',
    preTraining: 'Rotaciones de hombros, estiramientos de tríceps y algunos fondos con asistencia.',
    postTraining: 'Estiramientos de tríceps y pecho en una puerta.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta la máquina de fondos asistidos.',
      'Coloca las rodillas en la plataforma de asistencia.',
      'Agarra las barras paralelas y baja el cuerpo doblando los codos.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Press con mancuernas en banco plano',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, estiramientos dinámicos del pecho y algunas series ligeras con mancuernas.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas hacia adelante.',
      'Baja las mancuernas hasta que los codos estén a 90 grados.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Press con mancuernas en banco inclinado',
    musclesExercised: 'Parte superior del pectoral mayor.',
    preTraining: 'Movimientos de brazos, estiramientos dinámicos del pecho y algunas series ligeras con mancuernas.',
    postTraining: 'Estiramientos de pecho en puerta, enfocados en la parte superior del pecho.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta el banco a una inclinación de 30-45 grados.',
      'Acuéstate con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas hacia adelante.',
      'Baja las mancuernas hasta que los codos estén a 90 grados.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Press con mancuernas en banco declinado',
    musclesExercised: 'Parte inferior del pectoral mayor.',
    preTraining: 'Movimientos de brazos, estiramientos dinámicos del pecho y algunas series ligeras con mancuernas.',
    postTraining: 'Estiramientos de pecho en puerta, enfocados en la parte inferior del pecho.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta el banco a una declinación de 15-30 grados.',
      'Acuéstate con una mancuerna en cada mano.',
      'Extiende los brazos sobre el pecho con las palmas hacia adelante.',
      'Baja las mancuernas hasta que los codos estén a 90 grados.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.'
    ]
  },
  {
    exercise: 'Aperturas en polea alta',
    musclesExercised: 'Pectoral mayor, especialmente las fibras externas.',
    preTraining: 'Movimientos de brazos y algunas series ligeras de aperturas con poleas.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las poleas en la posición más alta.',
      'Sostén las asas con los brazos extendidos.',
      'Junta las manos frente al pecho en un movimiento de arco.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Aperturas en polea baja',
    musclesExercised: 'Pectoral mayor, especialmente las fibras inferiores.',
    preTraining: 'Movimientos de brazos y algunas series ligeras de aperturas con poleas.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las poleas en la posición más baja.',
      'Sostén las asas con los brazos extendidos.',
      'Junta las manos frente al pecho en un movimiento de arco.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Aperturas en cable crossover',
    musclesExercised: 'Pectoral mayor, especialmente las fibras externas.',
    preTraining: 'Movimientos de brazos y algunas series ligeras de aperturas con cables.',
    postTraining: 'Estiramientos de pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las poleas a una altura media.',
      'Sostén las asas con los brazos extendidos.',
      'Junta las manos frente al pecho en un movimiento de arco.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de banca con cadenas',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, estiramientos dinámicos del pecho y algunas series ligeras con banda elástica.',
    postTraining: 'Estiramientos de pecho en puerta o empujando los brazos contra una pared.',
    breakTime: '60-90 segundos.',
    description: [
      'Ancla una banda elástica a la barra de una banca plana.',
      'Acuéstate en el banco y agarra la barra con las manos un poco más anchas que el ancho de los hombros.',
      'Baja la barra hasta tocar ligeramente el pecho.',
      'Empuja la barra hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones.',
    postTraining: 'Estiramientos de pecho y tríceps cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Colócate en posición de plancha con las manos ligeramente más anchas que los hombros.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones con manos juntas (Diamante)',
    musclesExercised: 'Pectoral mayor, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones.',
    postTraining: 'Estiramientos de tríceps y pecho cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las manos juntas debajo del pecho formando un diamante con los pulgares y los dedos índices.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque las manos.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones inclinadas',
    musclesExercised: 'Pectoral mayor, especialmente las fibras superiores.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones inclinadas.',
    postTraining: 'Estiramientos de pecho en puerta o empujando los brazos contra una pared.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las manos en una superficie elevada (banco, escalón).',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque la superficie.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones declinadas',
    musclesExercised: 'Pectoral mayor, especialmente las fibras inferiores.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones declinadas.',
    postTraining: 'Estiramientos de pecho en puerta o empujando los brazos contra una pared.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca los pies en una superficie elevada (banco, escalón).',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones con palmada',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones.',
    postTraining: 'Estiramientos de pecho y tríceps cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Colócate en posición de plancha con las manos ligeramente más anchas que los hombros.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo.',
      'Empuja hacia arriba explosivamente para dar una palmada antes de volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones en anillas',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones en anillas.',
    postTraining: 'Estiramientos de pecho y tríceps cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las manos en las anillas en posición de plancha.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque las anillas.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Flexiones en TRX',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras de flexiones en TRX.',
    postTraining: 'Estiramientos de pecho y tríceps cruzando los brazos frente al cuerpo y empujando ligeramente.',
    breakTime: '45-60 segundos.',
    description: [
      'Coloca las manos en las asas del TRX en posición de plancha.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque las asas.',
      'Empuja hacia arriba hasta extender completamente los brazos.'
    ]
  },
  {
    exercise: 'Press de pecho en máquina Hammer Strength',
    musclesExercised: 'Pectoral mayor, deltoides anterior, tríceps braquial.',
    preTraining: 'Movimientos de brazos, rotaciones de hombros y algunas series ligeras en la máquina Hammer Strength.',
    postTraining: 'Estiramientos de pecho en puerta o apoyando los brazos en una pared y girando el cuerpo hacia el lado opuesto.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Hammer Strength y ajusta la altura del asiento.',
      'Sostén las manijas con las manos al ancho de los hombros.',
      'Empuja las manijas hacia adelante hasta extender completamente los brazos.',
      'Regresa lentamente a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de pecho en máquina Hammer Strength',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Hammer Strength y ajusta la altura del asiento para que las manijas estén al nivel de tu pecho.',
      'Agárrate a las manijas con ambas manos.',
      'Empuja hacia adelante hasta extender los brazos, sin bloquear los codos.',
      'Vuelve a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Press de pecho unilateral con mancuernas',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano sosteniendo una mancuerna en una mano con la palma hacia adelante.',
      'Empuja la mancuerna hacia arriba hasta extender el brazo.',
      'Baja la mancuerna de manera controlada hasta que el codo esté alineado con el pecho.',
      'Repite con el otro brazo.'
    ]
  },
  {
    exercise: 'Press de pecho unilateral en máquina',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina y ajusta el asiento para que la manija esté al nivel de tu pecho.',
      'Empuja la manija hacia adelante hasta extender el brazo.',
      'Regresa a la posición inicial de manera controlada.',
      'Repite con el otro brazo.'
    ]
  },
  {
    exercise: 'Press de pecho en banco con stability ball',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate sobre una pelota de estabilidad con la espalda apoyada y los pies firmemente plantados en el suelo.',
      'Sostén una mancuerna en cada mano a la altura del pecho.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Push-up con peso adicional',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate en posición de push-up con una pesa o disco en la espalda.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del suelo.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones arqueadas',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate en posición de push-up con las manos más separadas de lo habitual.',
      'Baja el cuerpo doblando los codos en un ángulo abierto.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones con agarre amplio',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate en posición de push-up con las manos más separadas de lo habitual.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del suelo.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones con peso corporal en anillas',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate en posición de push-up con las manos sujetando las anillas.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del suelo.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones en paralelas',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Colócate en posición de push-up con las manos sujetando las barras paralelas.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del suelo.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de pecho en máquina Marcy',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Marcy y ajusta la altura del asiento para que las manijas estén al nivel de tu pecho.',
      'Agárrate a las manijas con ambas manos.',
      'Empuja hacia adelante hasta extender los brazos, sin bloquear los codos.',
      'Vuelve a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Press de pecho en máquina Cybex',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Siéntate en la máquina Cybex y ajusta la altura del asiento para que las manijas estén al nivel de tu pecho.',
      'Agárrate a las manijas con ambas manos.',
      'Empuja hacia adelante hasta extender los brazos, sin bloquear los codos.',
      'Vuelve a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Press con mancuernas en banca ajustable',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Ajusta la banca en un ángulo inclinado.',
      'Acuéstate en la banca sosteniendo una mancuerna en cada mano a la altura del pecho.',
      'Empuja las mancuernas hacia arriba hasta extender los brazos.',
      'Baja las mancuernas de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Press de pecho con cable',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Coloca las poleas en una posición baja y ajusta el peso deseado.',
      'Sujeta las manijas con las palmas hacia adelante y los codos doblados.',
      'Empuja las manijas hacia adelante hasta extender los brazos.',
      'Regresa a la posición inicial de manera controlada.'
    ]
  },
  {
    exercise: 'Flexiones de pecho con BOSU',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Coloca las manos sobre el lado plano del BOSU, con los pies extendidos hacia atrás.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del BOSU.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  },
  {
    exercise: 'Press de pecho con Kettlebell',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Acuéstate en un banco plano sosteniendo una kettlebell en cada mano.',
      'Empuja las kettlebells hacia arriba hasta extender los brazos.',
      'Baja las kettlebells de manera controlada hasta la posición inicial.'
    ]
  },
  {
    exercise: 'Flexiones con bandas de resistencia',
    musclesExercised: 'Principalmente el pectoral mayor, deltoides anterior y tríceps.',
    preTraining: 'Realiza rotaciones de hombros y estiramientos dinámicos de brazos.',
    postTraining: 'Estira los pectorales colocando el brazo en un ángulo de 90 grados contra una pared y girando el cuerpo en sentido contrario.',
    breakTime: '60-90 segundos.',
    description: [
      'Coloca una banda de resistencia alrededor de tu espalda y sujeta los extremos con las manos.',
      'Colócate en posición de push-up.',
      'Baja el cuerpo doblando los codos hasta que el pecho esté cerca del suelo.',
      'Empuja hacia arriba hasta volver a la posición inicial.'
    ]
  }
];



const loadExercises = async () => {
  try {
    await ChestExercise.insertMany(exercises);
    console.log('Exercises inserted!');
    await mongoose.disconnectDB();
  } catch (err) {
    console.error('Error inserting exercises:', err);
    await mongoose.disconnectDB();
  }
};

loadExercises();