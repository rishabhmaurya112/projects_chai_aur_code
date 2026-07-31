// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (btn) {
//     body.addEventListener('click', function (evnt){
//         console.log(evnt.target);
//         if(evnt.target.id === 'grey'){
//             body.style.backgroundColor = "grey";
//         }
//         else if(evnt.target.id === 'white'){
//             body.style.backgroundColor = "white";
//         }
//         else if(evnt.target.id === 'blue'){
//             body.style.backgroundColor = "blue";
//         }
//         else{
//             body.style.backgroundColor = "yellow";
//         }
//     });
// });

// //not true (i tried optimised but it didnt worked)
// // const button = document.querySelector('.button');
// // const body = document.querySelector('body');

// // button.addEventListener('click', function (evnt){
// //     // console.log(evnt);
// //     // console.log(evnt.target.id);
// //     body.style.backgroundColor = evnt.target.id;
// // });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(element => {
    element.addEventListener('click', function(e){
        const color_id = e.target.id;
        console.log(color_id);
        if(color_id == "grey") body.style.backgroundColor = color_id;
        else if(color_id == "white") body.style.backgroundColor = color_id;
        else if(color_id == "blue") body.style.backgroundColor = color_id;
        else if(color_id == "yellow") body.style.backgroundColor = color_id;
    });
});