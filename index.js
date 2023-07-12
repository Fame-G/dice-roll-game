function startGame(){

    // todo: name assigning
var player1 = prompt("Player1's name");
var player2 = prompt("Player2's name");
player1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase()
player2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase()

document.querySelector(".player1").textContent = player1
document.querySelector(".player2").textContent = player2


// todo: to set the dice roll gif

let diceNum1 = document.querySelector(".img1");
 let diceNum2 = document.querySelector(".img2");
diceNum1.setAttribute("src", "diceroll.gif")
diceNum2.setAttribute("src", "diceroll.gif")

let result = document.querySelector('h1')
result.innerHTML = ""
setTimeout(() => {
// todo:Generate a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// todo:images/dice1.png up to images/dice6.png
let firstDIceImage = 'images/dice' + randomNumber1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDIceImage);

// ?now for player 2

//todo:Generate a random number from 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// todo:images/dice1.png up to images/dice6.png
let secondDIceImage = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src',secondDIceImage);

// todo: Logic for finding winner and draw
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = player1 +  " wins"
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = player2 +  " wins"
}else{
    document.querySelector("h1").textContent = "Draw"
}

}, 2500);
}
