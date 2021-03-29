const rightAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (gaba, resp) => {
  if (resp === 'N.A') {
    return 0;
  } else if (gaba === resp) {
    return 1;
  } else {
    return -0.5;
  }
}

const hof = (rightAnswers, studentAnswers, action) => {
  let grade = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const gaba = rightAnswers[index];
    const resp = studentAnswers[index];
    grade += action(gaba, resp);
  }
  return grade;
}

console.log(hof(rightAnswer, studentAnswer, checker));