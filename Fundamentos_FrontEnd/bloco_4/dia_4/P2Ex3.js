function menorNumeroIndice(numeros) {
    let numerosMenores = 0
    for (let indice = 0; indice < numeros.length; indice++) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[indice] > numeros[i]) {
                numerosMenores = numerosMenores + 1
            }           
        }
        if (numerosMenores === 0) {
            console.log(indice)
        }
        numerosMenores = 0   
    }
}

menorNumeroIndice([2, 4, 6, 7, 10, 0, -3]);