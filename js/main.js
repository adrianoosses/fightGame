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
        let punch = ((this.attack*0.7 + this.speed*0.2)/(100 - this.defense))*luckFactor*1.2; 
        enemy.life -= punch;
    }
}

class Player{
    constructor(luchador){
        this.luchador = luchador;
    }
}
// name, attack, speed, luck, defense
let tyler = new Fighter("Tyler Durden", 80, 80, 90, 70);
let jack = new Fighter("Jack", 70, 75, 95, 65);



let player1 = tyler;
let player2 = jack;
/*
let player1 = [];
let player2 = [];

// Hacer find by name 

function player1Choose(fighterChosen){
    console.log("El jugador 1 elige a: ");
    player1 = new Fighter(fighterChosen);
}

function player2Choose(fighterChosen){
    console.log("El jugador 2 elige a: ");
    player2 = new Fighter(fighterChosen);
}
*/


//let currentPlayer = player1;
let turn = 1;
function attack(){
    if(turn == 1){
        console.log("Player actual:", player1.name);
        player1.punchAttack(player2);
        //localStorage.setItem("textLifeP1", player1.life)
        textLifeP2 = document.getElementById("textLifeP2");
        textLifeP2.value = player2.life;
        if(player2.life < 0) console.log("Player 1 wins");
        turn = 2;
    }else{
        console.log("Player actual:", player2.name);
        player2.punchAttack(player1);
        textLifeP1 = document.getElementById("textLifeP1");
        textLifeP1.value = player1.life;
        if(player1.life < 0) console.log("Player 2 wins");
        turn = 1;
    }
    console.log("Vida Player1",player1.life);
    console.log("Vida Player2",player2.life);
}