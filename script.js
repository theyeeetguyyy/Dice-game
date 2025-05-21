var a = Math.random();
a *= 6;
a = Math.floor(a) + 1;
console.log(a);

var b = Math.random();
b *= 6;
b = Math.floor(b) + 1;
console.log(b);

if(a == 1){
    document.getElementById("dice1").setAttribute("src","./images/dice1.png");
}
else if(a == 2){
    document.getElementById("dice1").setAttribute("src","./images/dice2.png");
}
else if(a == 3){
    document.getElementById("dice1").setAttribute("src","./images/dice3.png");
}
else if(a == 4){
    document.getElementById("dice1").setAttribute("src","./images/dice4.png");
}
else if(a == 5){
    document.getElementById("dice1").setAttribute("src","./images/dice5.png");
}
else if(a == 6){
    document.getElementById("dice1").setAttribute("src","./images/dice6.png");
}

if(b == 1){
    document.getElementById("dice2").setAttribute("src","./images/dice1.png");
}
else if(b == 2){
    document.getElementById("dice2").setAttribute("src","./images/dice2.png");
}
else if(b == 3){
    document.getElementById("dice2").setAttribute("src","./images/dice3.png");
}
else if(b == 4){
    document.getElementById("dice2").setAttribute("src","./images/dice4.png");
}
else if(b == 5){
    document.getElementById("dice2").setAttribute("src","./images/dice5.png");
}
else if(b == 6){
    document.getElementById("dice2").setAttribute("src","./images/dice6.png");
}


if(a > b){
    document.getElementById("headd").textContent = "Player 1 Wins"
}
else if(a <b){
    document.getElementById("headd").textContent = "Player 2 Wins"   
}
else{
    document.getElementById("headd").textContent = "Draw"
}

document.getElementById("btn").onclick = () => location.reload();