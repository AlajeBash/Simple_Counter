// let inc = document.getElementById('increment');
// let dec = document.getElementById('decrement');
// let res = document.getElementById('reset');

// inc.addEventListener('click', increment);
// dec.addEventListener('click', decrement);
// res.addEventListener('click', reset);

// function increment(){
//     let count = document.querySelector('.count');
//     count.textContent = parseInt(count.textContent) + 1;
// }

// function decrement(){
//     let count = document.querySelector('.count');
//     count.textContent = parseInt(count.textContent) - 1;
// }

// function reset(){
//     let count = document.querySelector('.count');
//     count.textContent = parseInt(0);
// }

let startBtn = document.getElementById('start');
let closeBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let count = document.querySelector('.count');
startBtn.addEventListener('click', start);
closeBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
let isRuning = false;



let interval;

function start(){
    interval = setInterval(increment, 100);

    isRuning = true
}

function increment(){
    count.textContent = parseInt(count.textContent) + 1;
}

function stop(){
    clearInterval(interval);
    isRuning = false;
}

function reset(){
   if(!isRuning){
    count.textContent = parseInt(0);
   }

}
