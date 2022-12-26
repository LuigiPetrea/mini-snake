var rows = document.querySelectorAll('.row');
var cols = document.querySelectorAll('.col');
var row = 2;
var col = 12;

var containerMap = document.querySelectorAll('.container');
var arrayMapSnake = [rows, cols];

var gameOver = document.getElementById('game-over');
var bntRemach = document.getElementById('remach');

function gameOverDisplay(){
            stop = false;
            gameOver.style.display = "none";
            arrayMapSnake[1][col].style.backgroundColor = "white";
            row = 2;
            col = 12;
            arrayMapSnake[1][col].style.backgroundColor = "black";
}
var stop = false;
window.addEventListener('keydown', event =>{
    if (stop === false){
    switch (event.key){
    case 'ArrowUp': {
        if (row === 0){
            gameOver.style.display = "block";
            bntRemach.onclick = gameOverDisplay;
            stop = true;
            return 0;
        }
            --row;
        arrayMapSnake[1][col].style.backgroundColor = "white";
        col = col - 5;
        arrayMapSnake[1][col].style.backgroundColor = "black";
break;
    }
    case 'ArrowDown': {
        if (row >= 4){
            gameOver.style.display = "block";
            bntRemach.onclick = gameOverDisplay;
            stop = true;
            return 0;
        }
        ++row;
        arrayMapSnake[1][col].style.backgroundColor = "white";
        col = col + 5;
        arrayMapSnake[1][col].style.backgroundColor = "black";
break;
}
    case 'ArrowLeft': {
        if (col % 5 === 0){
            gameOver.style.display = "block";
            bntRemach.onclick = gameOverDisplay;
            stop = true;
            return 0;
        }
        arrayMapSnake[1][col].style.backgroundColor = "white";
        col = col - 1;
        arrayMapSnake[1][col].style.backgroundColor = "black";
break;
}
    case 'ArrowRight': {        
        if (col === 4 || col === 9 || col === 14 || col === 19 || col === 24){
            gameOver.style.display = "block";
            bntRemach.onclick = gameOverDisplay;
            stop = true;
            return 0;
        }
        arrayMapSnake[1][col].style.backgroundColor = "white";
        col = col + 1;
        arrayMapSnake[1][col].style.backgroundColor = "black";
break;
}
    }
}
    
});
