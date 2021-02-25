let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []

for (let index = 0; index < numbers.length; index++) {
    if ((numbers[index] % 2) > 0) {
        impar.push(numbers[index])
    } 
}

if (impar.length < 1) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(impar)
}
