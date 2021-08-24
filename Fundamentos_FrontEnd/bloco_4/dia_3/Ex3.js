let n = 5
let linha = ''


for (let i = 1; i <= n; i++) {
    for (index = 1; index <= n; index++) {
        if (index <= (n - i)) {
            linha = linha + ' '
        } else {
            linha = linha + '*'
        }
    }
console.log(linha)
linha = ''
}

