let n = 11;
let linha = '';

for (let i = ((n - 1) / 2); i >= 0; i--){
	for (let index = 1; index <= n; index++) {
		if (i === 0) {
			linha = linha + '*'
		} else if (index === (n - (n - (i + 1))) || index === (n - i)) {
			linha = linha + '*'
		} else {
			linha = linha + ' '
		}
	}
	console.log(linha);
	linha = '';
}
