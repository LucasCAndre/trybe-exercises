function maiorNumeroIndice(numeros) {
    let numerosMaiores = 0
    for (let indice = 0; indice < numeros.length; indice++) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[indice] < numeros[i]) {
                numerosMaiores = numerosMaiores + 1
            }           
        }
        if (numerosMaiores === 0) {
            console.log(indice)
        }
        numerosMaiores = 0   
    }
}

maiorNumeroIndice([2, 3, 6, 7, 10, 1]);
