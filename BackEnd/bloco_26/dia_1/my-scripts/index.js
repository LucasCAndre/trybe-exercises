const readline = require("readline-sync");

const quest = () => {
  console.log(
    `1 - IMC,
2 - Velocidade,
3 - Sorteio`
  );

  const option = readline.questionInt("Qual opção acima deseja executar?");

  if (option === 1) require("./imc");
  if (option === 2) require("./velocidade");
  if (option === 3) require("./sorteio");
};

quest();
