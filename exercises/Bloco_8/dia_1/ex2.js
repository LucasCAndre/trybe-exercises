
const check = (num1, num2) => {
  if (num1 === num2) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

const hof = (num, action) => {
  const sortedNum = Math.ceil(Math.random() * 5);
  return action(num, sortedNum);
};

console.log(hof(3, check));