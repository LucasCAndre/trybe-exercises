let salarioBruto = 3000;
let inss;
let ir;


//INSS
if (salarioBruto <= 1556.94) {
    inss = (0.08 * salarioBruto)
}
else if (salarioBruto <= 2594.92) {
    inss = (0.09 * salarioBruto)
}
else if (salarioBruto <= 5189.82) {
    inss = (0.11 * salarioBruto)
}
else {
    inss = 570.88
}

let salario = salarioBruto - inss

//IR
if (salario <= 1903.98) {
    ir = 0
}
else if (salario <= 2826.65) {
    ir = ((0.075 * salario) - 142.80)
}
else if (salario <= 3751.05) {
    ir = ((0.15 * salario) - 354.80)
}
else if (salario <= 4664.68) {
    ir = ((0.225 * salario) - 636.13)
}
else {
    ir = ((0.275 * salario) - 869.36)
}

console.log(salarioBruto - inss - ir)