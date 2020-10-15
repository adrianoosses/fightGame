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
        this.contador = 0;
    }
    setLuchador(luchador){
        this.luchador.push(luchador);
    }
    aumentaContador(){
        this.contador++;
    }
    getLuchador(){
        return this.luchador;
    }

    getContador(){
        return this.contador;
    }
}
// name, attack, speed, luck, defense
let tyler = new Fighter("Tyler Durden", 80, 80, 90, 70);
let jack = new Fighter("Jack", 70, 75, 95, 65);
let angelFace = new Fighter("Angel Face", 60, 95, 95, 60);
let mechanic = new Fighter("The Mechanic", 90, 60, 70, 100);
let fig5 = new Fighter("Fig5", 95, 50, 96, 80);
let fig6 = new Fighter("Fig6", 75, 80, 75, 85);

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
    <button id="fighter5" onclick="selection(fig5)">F5</button>
    <button id="fighter6" onclick="selection(fig6)">F6</button>
`;


let currentPlayerId = 0;
let id = 0;
//let player1 = new Player(jack);
//console.log(player1)
arrayFighters = [];
arrayPlayers = [];
nMaxPlayers = 2;
nMaxFighters = 3;
function selection(nombre){
    if(arrayPlayers.length < nMaxPlayers){
        arrayPlayers.push(new Player());
        console.log("Mete player");
        console.log("mete1:",arrayPlayers);
    }
    if(arrayFighters == 3){
        console.log("Ya has elegido tres personajes");
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
    <p id="p1f1"></p>
    <p>Player 2 - </p>
    <p id="p2f1"></p>
`;

function cargarPersonajes(){
    console.log("entra en la funcion");
    let p1f1Box = document.querySelector("#p1f1");
    let p2f1Box = document.querySelector("#p2f1");
    p1f1Box.innerHTML = ``;
    p2f1Box.innerHTML = ``;
    for(let i = 0; i < 3; i++){
        p1f1Box.innerHTML += `<p>${arrayPlayers[0].getLuchador()[i].name}</p>`;
        p2f1Box.innerHTML += `<p>${arrayPlayers[1].getLuchador()[i].name}</p>`;
    }
    
}

containerBox4.innerHTML = `
<h1>FIGHT!</h1>
<h2>Combate 1</h2>
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
    <h1>Ha ganado<h1> 
    <h1 id="winner"></h1>
    <p>Victorias del Jugador 1</p>
    <p id="p1victories"></p>
    <p">Victorias del Jugador 2</p>
    <p id="p2victories"></p>`;


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
let nCombat = 0;
let idFighting = 0;
let nGames = 0;


function attack(){
    if(nGames < nMaxFighters){
        console.log("Player 1:", arrayPlayers[0]);
        console.log("Player 2:", arrayPlayers[1]);
        console.log("ID FIghting", idFighting);
        if(turn == 1){
            console.log("Player actual 1:", arrayPlayers[0].getLuchador()[idFighting].name);
            arrayPlayers[0].getLuchador()[idFighting].punchAttack(arrayPlayers[1].getLuchador()[idFighting]);
            //localStorage.setItem("textLifeP1", player1.life)
            textLifeP2 = document.getElementById("textLifeP2");
            textLifeP2.value = arrayPlayers[1].getLuchador()[idFighting].life;
            if(arrayPlayers[1].getLuchador()[idFighting].life < 0) console.log("Player 1 wins");
            
            let bar2 = document.querySelector("#barraVida2");
            if(arrayPlayers[1].getLuchador()[idFighting].life < 0) arrayPlayers[1].getLuchador()[idFighting].life = 0;
            bar2Value = (20/500)*arrayPlayers[0].getLuchador()[idFighting].life + "em";
            bar2.style.width =bar2Value;
            
            turn = 2;
        }else{
            console.log("Player actual 2:", arrayPlayers[1].getLuchador()[idFighting].name);
            arrayPlayers[1].getLuchador()[idFighting].punchAttack(arrayPlayers[0].getLuchador()[idFighting]);
            textLifeP1 = document.getElementById("textLifeP1");
            textLifeP1.value = arrayPlayers[0].getLuchador()[idFighting].life;
            if(arrayPlayers[0].getLuchador()[idFighting].life < 0) console.log("Player 2 wins");

            let bar1 = document.querySelector("#barraVida1");
            if(arrayPlayers[0].getLuchador()[0].life < 0) arrayPlayers[0].getLuchador()[idFighting].life = 0;
            bar1Value = (20/500)*arrayPlayers[0].getLuchador()[idFighting].life + "em";
            bar1.style.width = bar1Value;

            turn = 1;
        }
        if( arrayPlayers[0].getLuchador()[idFighting].life <= 0 ){
            arrayPlayers[1].aumentaContador();
            console.log("aumenta id figh");
            idFighting++;
            nGames++;
            console.log("Games:", nGames);
        }else if(arrayPlayers[1].getLuchador()[idFighting].life <= 0){
            arrayPlayers[0].aumentaContador();
            console.log("aumenta id figh");
            idFighting++;
            nGames++;
            console.log("Games:", nGames);
        }

    } else{
        containerBox4.style.display = 'none'; 
        containerBox5.style.display = '';
        console.log("FIN DEL JUEGO");
        let winner = document.querySelector("#winner");
        let p1vic = document.querySelector("#p1victories");
        let p2vic = document.querySelector("#p2victories");
        p1vic.innerHTML = arrayPlayers[0].getContador();
        p2vic.innerHTML = arrayPlayers[1].getContador();
        if( arrayPlayers[0].getContador() > arrayPlayers[1].getContador() ){
            winner.innerHTML=`El jugador 1`;
        }else{
            winner.innerHTML=`El jugador 2`;
        }
            
            
    }
    //console.log("Vida Player1",arrayPlayers[0].getLuchador()[idFighting].life);
    //console.log("Vida Player2",arrayPlayers[1].getLuchador()[idFighting].life);
}