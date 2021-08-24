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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const studentsMath = (obj) => {
  const objs = Object.keys(obj);
  let numStudents = 0;
  for (index = 0; index < objs.length; index += 1) {
    if (Object.values(obj[objs[index]]).includes('Matemática')) {
      numStudents += obj[objs[index]].numeroEstudantes;
    }
  }
  return numStudents;
}

console.log(studentsMath(allLessons));

const reportProf = (obj, prof) => {
  const objs = Object.keys(obj);
  const report = {professor: prof, aulas: [], estudantes: 0}
  for (index = 0; index < objs.length; index += 1) {
    if (Object.values(obj[objs[index]]).includes(prof)) {
      report.aulas.push(obj[objs[index]].materia)
      report.estudantes += obj[objs[index]].numeroEstudantes;
    }
  }
  return report
}

console.log(reportProf(allLessons, 'Maria Clara'));