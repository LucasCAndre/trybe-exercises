let queenRowPosition = 4;
let queenColumnPosition = 4;

let opponentRowPosition = 4;
let opponentColumnPosition = 5;

let diferencaRow = queenRowPosition - opponentRowPosition;
let diferencaColumn = queenColumnPosition - opponentColumnPosition


let succesfulAttack = false


if (diferencaColumn === diferencaRow || diferencaColumn === (-1 * diferencaRow)) {
     succesfulAttack = true
}

if (succesfulAttack === true && diferencaRow > 0 && diferencaColumn > 0) {
    console.log('Ataque bem sucedido na diagonal inferior esquerda.')
}

if (succesfulAttack === true && diferencaRow < 0 && diferencaColumn > 0) {
    console.log('Ataque bem sucedido na diagonal superior esquerda.')
}

if (succesfulAttack === true && diferencaRow < 0 && diferencaColumn < 0) {
    console.log('Ataque bem sucedido na diagonal superior direita.')
}

if (succesfulAttack === true && diferencaRow > 0 && diferencaColumn < 0) {
    console.log('Ataque bem sucedido na diagonal inferior direita.')
}

if (queenColumnPosition === opponentColumnPosition) {
    succesfulAttack = true
    console.log('Ataque bem sucedido na mesma coluna')
}

if (queenRowPosition === opponentRowPosition) {
    succesfulAttack = true
    console.log('Ataque bem sucedido na mesma linha')
}


if (succesfulAttack === false) {
    console.log('Não foi dessa vez!')
}