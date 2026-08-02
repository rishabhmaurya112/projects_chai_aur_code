// let RNo = Math.random();
// RNo = (RNo * 100) + 1;
// RNo = parseInt(RNo);
// console.log(RNo);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// let prevGuess = [];
// let numGuess = 1;
// let playgame = true;

// if(playgame == true){
//     submit.addEventListener('click', function(e){
//         e.preventDefault();
//         const guess = parseInt(userInput.value);
//         console.log(guess);
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess){
//     if(isNaN(guess) || guess>100 || guess<1 || guess ===''){
//         lowOrHi.innerHTML = `"${guess}", is not valid please enter number again`;
//     }
//     // if(guess < 1) lowOrHi.innerHTML = `enter value more than ${guess}`
//     else {
//         prevGuess.push(guess);
//         if(numGuess == 11){
//             displayGuess(guess);
//             displayMessage(`Game Over you!! Number was ${RNo}`);
//             endGame();

//         }
//         else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(){
//     //
// }
// function displayGuess(){
//     //
// }

// function displayMessage(){
//     //
// }

// function newGame(){
//     //
// }

// function endGame(){
//     //
// }

// const form = document.querySelector('.form');
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const guessNo = parseInt(document.querySelector('#guessField').value);
//     console.log(guessNo);
// });

const guess = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let cnt=10;
let guessArr = [];

let RNo = parseInt((Math.random() * 100) +1);
console.log(RNo);
startGame();

function startGame(){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guessNo = parseInt(guess.value);

        valid(guessNo);
    });
}

function valid(guessNo){
    if(isNaN(guessNo) || guessNo ==='') {
        lowOrHi.innerHTML = `${guessNo}, is not a number!!`;
    }
    else if(guessNo<1 || guessNo>100){
        lowOrHi.innerHTML = `Number should be between 1-100 only!!`;
    }
    else{
        if(cnt > 1){
            chech_high_or_low(guessNo);
        }
        else{
            looseGame();
        }
    }
}

function chech_high_or_low(guessNo){
    if(RNo === guessNo){
        lowOrHi.innerHTML = `you guessed right number!! start new game!!`;
        wonGame();
    }
    else if(RNo > guessNo){
        lowOrHi.innerHTML = `you guessed too low`;
        guess.value = '';
        reduce_remaining();
        insert_prev_guess(guessNo);
    }
    else{
        lowOrHi.innerHTML = `you guessed too high`;
        guess.value = '';
        reduce_remaining();
        insert_prev_guess(guessNo);
    }
}

function reduce_remaining(guessNo){
    cnt = remaining.innerHTML;
    cnt --;
    console.log(cnt);
    remaining.innerHTML = cnt;
}

function insert_prev_guess(guessNo){
    guessArr += `${guessNo} `;
    prevGuess.innerHTML = guessArr;
}

function wonGame(){
    alert("you guessed the right number!! ");
    location.reload();
}

function looseGame(){
    alert("you tried all attempts and you lost!!");
    location.reload();
}