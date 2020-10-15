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
let containerBox6 = document.querySelector(".container6");

containerBox1.style.display = "";
containerBox2.style.display = "none";
containerBox3.style.display = "none";
containerBox4.style.display = "none";
containerBox5.style.display = "none";
containerBox6.style.display = "none";

containerBox1.innerHTML = `
        <div class='menu'> \
            <h2>Main menu</h2> \
            <p>1 player</p>
            <button onclick="containerBox1.style.display = 'none'; containerBox2.style.display = ''";>
                2 arrayFighters
                </button>
            <p>Instructions</p>
        </div>
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
    constructor(){
        this.luchador = [];
    }
    setLuchador(luchador){
        this.luchador.push(luchador);
    }
    getLuchador(){
        return this.luchador;
    }
}
// name, attack, speed, luck, defense
let tyler = new Fighter("Tyler Durden", 80, 80, 90, 70);
let jack = new Fighter("Jack", 70, 75, 95, 65);
let angelFace = new Fighter("Angel Face", 60, 95, 95, 60);
let mechanic = new Fighter("The Mechanic", 90, 60, 70, 100);

//let arrayFighters = [player1, player2];

containerBox2.innerHTML = `
    <h1>CHOOSE CHARACTER</h1>
    <button onclick="containerBox2.style.display = 'none'; containerBox3.style.display = ''; cargarPersonajes();">
                FIGHT
        </button>
    <button id="fighter1" onclick="selection(tyler)">F1</button>
    <button id="fighter2" onclick="selection(jack)">F2</button>
    <button id="fighter3" onclick="selection(angelFace)">F3</button>
    <button id="fighter4" onclick="selection(mechanic)">F4</button>
`;


let currentPlayerId = 0;
let id = 0;
//let player1 = new Player(jack);
//console.log(player1)
arrayFighters = [];
arrayPlayers = [];
nMaxPlayers = 2;
function selection(nombre){
    if(arrayPlayers.length < nMaxPlayers){
        arrayPlayers.push(new Player());
        console.log("Mete player");
        console.log("mete1:",arrayPlayers);
    }
    if(arrayFighters == 2){
        console.log("Ya has elegido dos personajes");
    }else{
        arrayPlayers[currentPlayerId].setLuchador(nombre);
        if(currentPlayerId == nMaxPlayers-1){
            currentPlayerId = 0;
        }else{
            currentPlayerId++;
            console.log("id",currentPlayerId);
        }
        console.log("mete2:",arrayPlayers);
    }
    //arrayFighters[currentPlayerId].setLuchador(nombre);
    /*
    player1.setLuchador(nombre);
    player1 = new Player(tyler);
    console.log(player1)
    if(currentPlayerId == 0){
        currentPlayerId++;
    }else{
        currentPlayerId--;
    }*/
}

containerBox3.innerHTML = `
    <h1>MATCHING!</h1>
    <button onclick="containerBox3.style.display = 'none'; containerBox4.style.display = ''";>
                FIGHT
        </button>
    <P>Player 1 -</p>
    <p id="p1Luchador"></p>
    <p>Player 2 - </p>
    <p id="p2Luchador"></p>
`;

function cargarPersonajes(){
    console.log("entra en la funcion");
    let p1Box = document.querySelector("#p1Luchador");
    p1Box.innerHTML = `<p>${arrayPlayers[0].getLuchador().name}</p>`;
    let p2Box = document.querySelector("#p2Luchador");
    p2Box.innerHTML = `<p>${arrayPlayers[1].getLuchador().name}</p>`;
}

containerBox4.innerHTML = `
<h1>FIGHT!</h1>
<div id="player1">
    <div id="lifeP1">
        <p>Life of Player 1: </p>
        <input type="text" placeholder="500" id="textLifeP1" name="textLifeP1">
        <div id="barraVida1">Barra1</div>
        
    </div>
</div>
<div id="player2">
    <div id="lifeP2">
        <p>Life of Player 2: </p>
        <input type="text" placeholder="500" id="textLifeP2" name="textLifeP2">
        <div id="barraVida2">Barra2</div>
    </div>
</div>
<br>
<button onclick="attack()" id="btnFight">Attack</button>
`;

containerBox5.innerHTML = `
    <h1>Ha ganado el Jugador 1</h1>
`;

containerBox6.innerHTML = `
    <h1>Ha ganado el Jugador 2</h1>
`;

/*
let player1;
let player2 = jack;
*/

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
/*
let playerBox = document.querySelector(".p1Luchador");
playerBox.value = arrayFighters[0].name;*/
//let currentPlayer = player1;


//console.log(arrayFighters[0].name);


let turn = 1;
function attack(){
    if(turn == 1){
        console.log("Player actual:", arrayFighters[0].name);
        arrayFighters[0].punchAttack(arrayFighters[1]);
        //localStorage.setItem("textLifeP1", player1.life)
        textLifeP2 = document.getElementById("textLifeP2");
        textLifeP2.value = arrayFighters[1].life;
        if(arrayFighters[1].life < 0) console.log("Player 1 wins");
        
        let bar2 = document.querySelector("#barraVida2");
        if(arrayFighters[1].life < 0) arrayFighters[1].life = 0;
        bar2Value = (20/500)*arrayFighters[1].life + "em";
        bar2.style.width =bar2Value;
        
        turn = 2;
    }else{
        console.log("Player actual:", arrayFighters[1].name);
        arrayFighters[1].punchAttack(arrayFighters[0]);
        textLifeP1 = document.getElementById("textLifeP1");
        textLifeP1.value = arrayFighters[0].life;
        if(arrayFighters[0].life < 0) console.log("Player 2 wins");

        let bar1 = document.querySelector("#barraVida1");
        if(arrayFighters[0].life < 0) arrayFighters[0].life = 0;
        bar1Value = (20/500)*arrayFighters[0].life + "em";
        bar1.style.width = bar1Value;

        turn = 1;
    }

    if( arrayFighters[0].life <= 0 ){
        containerBox4.style.display = 'none'; 
        containerBox6.style.display = '';
    }else if(arrayFighters[1].life <= 0){
        containerBox4.style.display = 'none'; 
        containerBox5.style.display = '';
    }
    console.log("Vida Player1",arrayFighters[0].life);
    console.log("Vida Player2",arrayFighters[1].life);
}