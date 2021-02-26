let numbers = []

for (let index = 1; index <=25; index++) {
    numbers.push(index)
}

let halfNumbers = []

for (let index = 0; index < 25; index++) {
    halfNumbers.push((numbers[index] / 2))
}

console.log(halfNumbers)