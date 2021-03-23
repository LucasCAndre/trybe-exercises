const factor = (num) => {
    let factorNum = 1
    for (index = num; index > 1; index -= 1) {
        factorNum *= index;
    }
    return factorNum
}

console.log(factor(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(4))
