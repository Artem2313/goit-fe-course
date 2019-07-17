// User.prototype.changeName = function (newName) {
//     this.name = newName;
// }

const Hero = function(name, xp) {
    this.name = name;
    this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
    console.log(`${this.name} gained ${amount} XP`);
    this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
    this.weapon = weapon;
};

//  Цепочка прототипов
Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function() {
    Hero.apply(this, name, xp);
    console.log(`${this.name} attack with ${this.weapon}`);
};

const Mage = function Mage(name, xp, spells) {
    Hero.call(this, name, xp);

    this.spells = spells;
};

Mage.prototype = Object.create(Hero.prototype);

Mage.prototype.constructor = Mage;

Mage.prototype.castSpell = function() {
    console.log(`Available spells ${this.spells}`);
};

const poly = new Mage('Poly', 1000, ['fireball', 'cold snap']);

console.log(poly);

poly.castSpell();

poly.gainXp(2000);

// -----------------
const mango = new Warrior('Mango', 1000, 'axe');

console.log(mango);

mango.gainXp(500);

console.log(mango);