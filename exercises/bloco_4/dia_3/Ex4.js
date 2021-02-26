let n = 7
let linha = ''

for (let i = ((n - 1) / 2); i >= 0; i--){
	for (let index = 1; index <= n; index++) {
		if (index <= (n - (n - i)) || index > (n - i)) {
			linha = linha + ' '
		} else {
			linha = linha + '*'
		}
	}
	console.log(linha)
	linha = ''
}
