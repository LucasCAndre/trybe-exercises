let palavraInvertida = ''

function palindromo(palavra) {
    for (index = (palavra.length - 1); index >= 0; index--) {
        palavraInvertida = palavraInvertida + palavra[index]
    }
    if (palavra === palavraInvertida) {
        console.log(true)
    } else {
        console.log(false)
    }
};

palindromo('arara')