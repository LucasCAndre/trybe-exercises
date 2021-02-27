let n = 13
let divisores = 0

for (let index = 2; index <= n/2; index++) {
    if (n % index === 0) {
        divisores = divisores + 1
    }
}

if (divisores > 0) {
    console.log('Número não é primo')
} else {
    console.log('Número primo')
}
