const start = document.getElementById('start');
const stop = document.getElementById('stop');
const text = document.getElementById('text');
let interval;

start.addEventListener('click', function(e){
    console.log('hi');

    interval = setInterval(() => {
            change_text_aman();
        }, 2000);

    setTimeout(() => {
        setInterval(() => {
            change_text_rishabh();
        }, 2000);
    }, 1000);
});

stop.addEventListener('click', function(){
    console.log('stopped');
    clearInterval(interval);
});

function change_text_aman(){
    text.innerHTML = "hello this is Aman";
    console.log('aman');
}

function change_text_rishabh(){
    text.innerHTML = "hello this is Rishabh";
    console.log('rishabh');
}
