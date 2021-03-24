const biggestWord = (sentence) => {
    let arr = sentence.split(' ');
    let bigWord = 0
    let result = ''

    for (word of arr) {
        if (word.length > bigWord) {
            bigWord = word.length;
            result = word
        }
    }
    return result
}

console.log(biggestWord('ola meus amigos'))