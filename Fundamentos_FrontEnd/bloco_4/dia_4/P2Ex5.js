function mostRepeatingNumber(numeros) {
let repetitions = []
let numeroCampeao = 0
for (let index = 0; index < numeros.length; index++) {
    numberRepeat = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[index] === numeros[i]) {
            numberRepeat = numberRepeat + 1
        }
    }
    repetitions.push(numberRepeat)
}

    let numerosMaiores = 0
    for (let indice = 0; indice < repetitions.length; indice++) {
        for (let i = 0; i < repetitions.length; i++) {
            if (repetitions[indice] < repetitions[i]) {
                numerosMaiores = numerosMaiores + 1
            }           
        }
        if (numerosMaiores === 0) {
            numeroCampeao = numeros[indice]
        }
        numerosMaiores = 0   
    }
    return numeroCampeao
}    

console.log(mostRepeatingNumber([2, 3, 2, 5, 8, 2, 3]))