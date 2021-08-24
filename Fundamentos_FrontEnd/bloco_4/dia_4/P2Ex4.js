let tamanhoNomes = []

function maiorNome(nomes) {
    for (let index = 0; index < nomes.length; index++) {
        tamanhoNomes.push(nomes[index].length)
    }
    let numerosMaiores = 0
    for (let indice = 0; indice < tamanhoNomes.length; indice++) {
        for (let i = 0; i < tamanhoNomes.length; i++) {
            if (tamanhoNomes[indice] < tamanhoNomes[i]) {
                numerosMaiores = numerosMaiores + 1
            }           
        }
        if (numerosMaiores === 0) {
            console.log(nomes[indice])
        }
        numerosMaiores = 0   
    }
}


maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
