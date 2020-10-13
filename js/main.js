/*
* Valores:
* - Vida: 0-500
* - Resto: 0 - 100
*/

class Fighter{
    constructor(name, attack, speed, luck, defense){
        this.name = name;
        this.attack = attack;
        this.speed = speed;
        this.luck = luck;
        this.defense = defense;
        this.life = 500;
    }

    punchAttack(enemy){
        let luckFactor = Math.random() * this.luck;
        let punch = ((this.attack*0.7 + this.speed*0.2)/(100 - this.defense))*luckFactor*0.2; 
        enemy.life -= punch;
    }
}
// name, attack, speed, luck, defense
let tyler = new Fighter("Tyler Durden", 80, 80, 90, 70);
let jack = new Fighter("Jack", 70, 75, 95, 65);

console.log(tyler.life);
console.log(jack.life);

tyler.punchAttack(jack);

console.log(tyler.life);
console.log(jack.life);