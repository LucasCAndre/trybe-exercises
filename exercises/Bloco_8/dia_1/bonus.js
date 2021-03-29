const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const hit = Math.ceil(Math.random() * dragon.strength);
  return hit >= 15 ? hit : dragonDamage();
};

const warriorDamage = () => {
  const hit = Math.ceil(Math.random() * (warrior.strength * warrior.weaponDmg));
  return hit >= warrior.strength ? hit : warriorDamage();
};

const mageDamage = () => {
  let obj = {dano: 0, manaGasta: 0}
  if (mage.mana < 15) {
    obj.dano = 'Não possui mana suficiente';
    obj.manaGasta = 0;
  } else {
    obj.dano = Math.ceil(Math.random() * 2 * mage.intelligence);
    obj.manaGasta = 15;
  }
  return obj;
}

const gameActions = {
  warriorTurn: function () {
    const damage = warriorDamage();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  
  mageTurn: function () {
    const damage = mageDamage().dano;
    dragon.healthPoints -= damage;
    mage.damage = damage;
    mage.mana -= mageDamage().manaGasta;
  },

  dragonTurn: function () {
    const damage = dragonDamage();
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    dragon.damage = damage;
  },

  finalResult: function () {
    this.warriorTurn();
    this.mageTurn();
    this.dragonTurn();
    console.log(battleMembers);
  }
};

console.log(gameActions.finalResult());
