const readline = require("readline-sync");


const anscheck = () => {
  const ranNum = Math.round(Math.random() * 10);
  const guessedNum = readline.questionInt("Chuta um número de 1 a 10: ");
  if (guessedNum === ranNum) console.log("Parabéns, número correto!");
  if (guessedNum !== ranNum) console.log(`Opa, não foi dessa vez. O número era ${ranNum}`);

  const playAgain = readline.question("Quer tentar novamente(s/n)? ");

  if (playAgain === 's') anscheck();
};

anscheck();
