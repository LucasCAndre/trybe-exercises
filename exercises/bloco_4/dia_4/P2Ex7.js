function checkEndOfWord(word, ending) {
    let i = (word.length -1)
    let diferenca = 0
    for (let index = ending.length - 1; index >= 0; index--) {
        if (ending[index] !== word[i]) {
            diferenca = diferenca + 1
        }
        i = i - 1
    }
    if (diferenca > 0) {
        return false
    } else {
        return true
    }
}

console.log(checkEndOfWord('trybers', 'bers'))