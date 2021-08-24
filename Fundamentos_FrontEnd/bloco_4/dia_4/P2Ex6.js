function sum(n) {
let totalSum = 0
for (let index = n; index > 0; index--) {
    totalSum = totalSum + index
}
return totalSum
}

console.log(sum(5))