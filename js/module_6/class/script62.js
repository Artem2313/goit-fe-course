// User.prototype.changeName = function (newName) {
//     this.name = newName;
// }

// const Hero = function(name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${anount} XP`);
//     this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//     this.weapon = weapon;
// };

// //  Цепочка прототипов
// Warrior.prototype = Object.create(Hero.prototype);

// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function() {
//     Hero.apply(this, name, xp);
//     console.log(`${this.name} attack with ${this.weapon}`);
// };

// const Mage = function Mage(name, xp, spells) {
//     Hero.call(this, name, xp);

//     this.spells = spells;
// };

// Mage.prototype = Object.create(Hero.prototype);

// Mage.prototype.constructor = Mage;

// Mage.prototype.castSpell = function() {
//     console.log(`Available spells ${this.spells}`);
// };

// const poly = new Mage('Poly', 1000, ['fireball', 'cold snap']);

// console.log(poly);

// poly.castSpell();

// poly.gainXp(2000);

// // -----------------
// const mango = new Warrior('Mango', 1000, 'axe');

// console.log(mango);

// mango.gainXp(500);

// console.log(mango);

// class User {
//     constructor({ name = 'user', email = '', phone = ''}) {
//         this._name = name;
//         this._email = email;
//         this._phone = phone;
//     }


//     static showUserInfo(userObj) {
//         console.log(this);
//         console.log('Name: ', userObj._name);
//         console.log('Email: ', userObj._email);
//     }

//     showPhone() {
//         console.log(this._phone);
//     }

    
//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }


//     // getName() {
//     //     return this.name;
//     // }

//     // setName(newName) {
//     //     this.name = newName;
//     // }
// }

// const mango = new User ({
//     name: 'Mango',
//     email: 'mango@gmail.com',
//     phone: '99-99-99',
// });

// console.log(mango);

// console.log(mango.name);

// mango.name = 'Poly';

// console.log(mango.name);

class Hero {constructor(name, xp) {
    this.name = name;
    this.xp = xp;
}

gainXp (amount) {
    console.log(`${this.name} gained ${amount} XP`);
    this.xp += amount;
}


};


class Warrior extends Hero{
    constructor(name, xp, weapon) {
        super(name, xp);
        this.weapon = weapon;
    }

    attack () {
        Hero.apply(this, name, xp);
        console.log(`${this.name} attack with ${this.weapon}`);
    }


}


class Berserk extends Warrior {
    constructor(name, xp, weapon, warcry){
        super(name, xp, weapon);

        this.warcry = warcry;


    }
}



console.dir(Berserk);

const mango = new Berserk('Mango', 1000, 'axe', 'Waagh');

console.log(mango);

mango.gainXp(1000);

