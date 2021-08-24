// console.log('Hello, mundao!');
const readline = require('readline-sync');

// console.log(readline);

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);