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