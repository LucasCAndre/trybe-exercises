const readline = require("readline-sync");

const peso = readline.question("Qual o seu peso?");
const altura = readline.question("Qual a sua altura(em m)?")


const imc = (p, a) => {
  const myImc =  (p / (a * a));
  return myImc;
};

const theImc = imc(peso, altura);

console.log(`Seu IMC é de ${theImc}`);

const imcSituation = (imc) => {
  if (imc < 18.5) return "Abaixo do peso (magreza)";
  if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
  if (imc >= 25 && imc <= 29.9) return "Acima do peso (sobrepeso)";
  if (imc >= 30 && imc <= 34.9) return "Obesidade grau I";
  if (imc >= 35 && imc <= 39.9) return "Obesidade grau II";
  if (imc >= 40) return "Obesidade grau III";
};

console.log(imcSituation(theImc));
