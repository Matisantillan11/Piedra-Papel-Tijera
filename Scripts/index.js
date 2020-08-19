const botones = document.querySelectorAll(".boton");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const NombreUser = document.getElementById("nombre-user")
const contadorUser = document.getElementById("marcador-user")
const contadorMachine = document.getElementById("marcador-machine")
let scoreUser = 0;
let scoreMachine = 0;
var userName = prompt("Ingresá tu nombre: ")
if (userName === null){
    NombreUser.innerHTML = User;
}else{
    NombreUser.innerHTML=userName;
}

var userChoice;
const preguntar = (user)=>{
    let options = ["piedra", "papel", "tijera"];
    let machineChoice = options[Math.floor(Math.random()*3)];
    switch(true){
        case user === machineChoice:
            alert("Nadie gana, EMPATE!");
            scoreUser++; 
            contadorUser.innerHTML = scoreUser;
            scoreMachine++;
            contadorMachine.innerHTML = scoreMachine;
            break;
        case user == "piedra" && machineChoice == "tijera":
            alert(`Felicidades ${userName}, GANASTE!`);
            scoreUser++; 
            contadorUser.innerHTML = scoreUser;
            break;
        case user == "papel" && machineChoice == "piedra":
            scoreUser++; 
            contadorUser.innerHTML = scoreUser;
            alert(`Felicidades ${userName}, GANASTE!`);
            break;
        case user == "tijera" && machineChoice == "papel":
            scoreUser++; 
            contadorUser.innerHTML = scoreUser;
            alert(`Felicidades ${userName}, GANASTE!`);
            break;
        default:
            alert(`Lo sentimos ${userName}, PERDISTE`);
            scoreMachine++;
            contadorMachine.innerHTML = scoreMachine;
    }
};

const jugar = ()=>{
    piedra.addEventListener('click', ()=>{
        preguntar("piedra");
    });
    papel.addEventListener('click', ()=>{
        preguntar("papel")
    });
    tijera.addEventListener('click', ()=>{
       preguntar("tijera")
    });
};


jugar();