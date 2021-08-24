const readline = require("readline-sync");

const tempo = readline.question("Qual o tempo em segundos?");
const distancia = readline.question("Qual a distancia em metros?")


const velocidade = (t, d) => {
  return d/t;
};

const velo = velocidade(tempo, distancia);

console.log(`Velocidade média: ${velo}m/s`);
