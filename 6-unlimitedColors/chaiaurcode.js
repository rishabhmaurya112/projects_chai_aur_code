const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let interval ;

function generate_random_color(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0 ; i<6 ; i++){
        color += hex[parseInt(Math.random() * 16)];
    }
    console.log(color); 
    return color;
}

start.addEventListener('click', function(){
    interval = setInterval(() => {
        let color = generate_random_color();
        body.style.backgroundColor = color;
    }, 100);
})

stop.addEventListener('click', function(){
    clearInterval(interval);
})