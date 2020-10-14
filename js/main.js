/*
* Valores:
* - Vida: 0-500
* - Resto: 0 - 100
*/

let containerBox1 = document.querySelector(".container1");
let containerBox2 = document.querySelector(".container2");
let containerBox3 = document.querySelector(".container3");
let containerBox4 = document.querySelector(".container4");
let containerBox5 = document.querySelector(".container5");

containerBox1.style.display = "";
containerBox2.style.display = "none";
containerBox3.style.display = "none";
containerBox4.style.display = "none";
containerBox5.style.display = "none";

containerBox1.innerHTML = `
        <div class='menu'> \
            <h2>Main menu</h2> \
            <p>1 player</p>
            <button onclick="containerBox1.style.display = 'none'; containerBox2.style.display = ''";>
                2 players
                </button>
            <p>Instructions</p>
        </div>
        `;
        

let id = 0;
containerBox2.innerHTML = `
    <h1>CHOOSE CHARACTER</h1>
    <button onclick="containerBox2.style.display = 'none'; containerBox3.style.display = ''";>
                FIGHT
        </button>
    <button id="fighter1" onclick="players[0]= tyler; ">F1</button>
    <button id="fighter2" onclick="players[1]= jack; ">F2</button>
    <div id="fighter3">F3</div>
    <div id="fighter4">F4</div>
`;


containerBox3.innerHTML = `
<h1>FIGHT!</h1>
<div id="player1">
    <div id="lifeP1">
        <p>Life of Player 1: </p>
        <input type="text" placeholder="500" id="textLifeP1" name="textLifeP1">
        <div id="barraVida1">Barra1</div>
        <div id="barraVida2">Barra2</div>
    </div>
</div>
<div id="player2">
    <div id="lifeP2">
        <p>Life of Player 2: </p>
        <input type="text" placeholder="500" id="textLifeP2" name="textLifeP2">
    </div>
</div>
<br>
<button onclick="attack()" id="btnFight">Attack</button>
`;

containerBox4.innerHTML = `
    <h1>Ha ganado el Jugador 1</h1>
`;

containerBox5.innerHTML = `
    <h1>Ha ganado el Jugador 2</h1>
`;



class Fighter{
    constructor( name, attack, speed, luck, defense){
        this.name = name;
        this.attack = attack;
        this.speed = speed;
        this.luck = luck;
        this.defense = defense;
        this.life = 500;
    }

    punchAttack(enemy){
        let luckFactor = Math.random() * this.luck;
        let punch = ((this.attack*0.7 + this.speed*0.2)/(enemy.defense))*luckFactor*1.2; 
        enemy.life -= parseInt(punch);
        
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


/*
let player1;
let player2 = jack;
*/
let players = [player1, player2];
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
        console.log("Player actual:", players[0].name);
        players[0].punchAttack(players[1]);
        //localStorage.setItem("textLifeP1", player1.life)
        textLifeP2 = document.getElementById("textLifeP2");
        textLifeP2.value = players[1].life;
        if(players[1].life < 0) console.log("Player 1 wins");
        
        let bar2 = document.querySelector("#barraVida2");
        bar2Value = (20/500)*players[1].life + "em";
        bar2.style.width =bar2Value;
        
        turn = 2;
    }else{
        console.log("Player actual:", players[1].name);
        players[1].punchAttack(players[0]);
        textLifeP1 = document.getElementById("textLifeP1");
        textLifeP1.value = players[0].life;
        if(players[0].life < 0) console.log("Player 2 wins");

        let bar1 = document.querySelector("#barraVida1");
        bar1Value = (20/500)*players[0].life + "em";
        bar1.style.width =bar1Value;

        turn = 1;
    }

    if( players[0].life <= 0 ){
        containerBox3.style.display = 'none'; 
        containerBox5.style.display = '';
    }else if(players[1].life <= 0){
        containerBox3.style.display = 'none'; 
        containerBox4.style.display = '';
    }
    console.log("Vida Player1",players[0].life);
    console.log("Vida Player2",players[1].life);
}