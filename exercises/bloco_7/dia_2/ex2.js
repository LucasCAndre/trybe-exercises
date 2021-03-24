const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addTurno(obj, newKey, value) {
  obj[newKey] = value;
  return obj
};

console.log(addTurno(lesson2, 'turno', 'manhã'));

const objKeys = (objecto) => Object.keys(objecto);

console.log(objKeys(lesson1));

const objSize = (objecto) => console.log(Object.keys(objecto).length);

objSize(lesson1);

const objValues = (objecto) => Object.values(objecto);

console.log(objValues(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const allStudents = () => {
  const num = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  return num;
}

console.log(allStudents());

const valueKey = (objecto, keyPosition) => Object.values(objecto)[keyPosition];

console.log(valueKey(lesson1, 0));

function confere(objecto, keys, value) {
  let val = false
  if (objecto[keys] === value) {
    val = true;
  }
  return val
}

console.log(confere(lesson3, 'materia', 'noite'));
