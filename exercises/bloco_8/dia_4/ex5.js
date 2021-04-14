
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const namesLength = names.map((name) => {
    nameLength = 0
    for (index in name) {
      if (name[index] === 'a' || name[index] === 'A') {
        nameLength += 1
      }
    }
    return nameLength
  })
  return namesLength.reduce((tot, cur) => tot + cur)
}

assert.deepStrictEqual(containsA(), 20);