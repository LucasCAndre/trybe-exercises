let numerosRomanos = {
i: 1,
v: 5,
x: 10,
l: 50,
c: 100,
d: 500,
m: 1000,
}

function conversorNumerosRomanos(numero) {
    numeroTotal = 0
    for (let index = 0; index < numero.length; index++) {
        if (numerosRomanos[numero[index]] < numerosRomanos[numero[index + 1]]) {
            numeroTotal = numeroTotal - numerosRomanos[numero[index]]
        } else {
            numeroTotal = numeroTotal + numerosRomanos[numero[index]]
        }
    }
    return numeroTotal
}

console.log(conversorNumerosRomanos('mcmlxxxix'));