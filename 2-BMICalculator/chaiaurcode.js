// const form = document.querySelector('form');
// const results = document.querySelector('#results');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const height = document.querySelector('#height').value;
//     const weight = document.querySelector('#weight').value;
//     const height_int = parseInt(height);
//     const weight_int = parseInt(weight);

//     // console.log(height);
//     // console.log(height_int);
//     if(height<=0 || isNaN(height) || height ===''){
//         results.innerHTML = `"${height}", is not a valid height`
//     }
//     else if(weight<=0 || isNaN(weight) || weight == ''){
//         results.innerHTML = `"${weight}", is not a vaild weight`;
//     }
//     else {
//         const bmi = ((weight_int / (height_int * height_int)) * 10000).toFixed(2);
//         results.innerHTML = `<span> "${bmi}", is your BMI </span>`;
//         const msg = document.createAttribute('span');
//         results.appendChild(msg);
//         if(bmi <= 18.6) msg.innerHTML = `UnderWeight`;
//         else if(bmi > 18.6 && bmi <= 24.9) msg.innerHTML = `NormalWeight`;
//         else msg.innerHTML = `OverWeight`
//     }
// });

const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if(isNaN(height) || height < 0 || height === ''){
        result.innerHTML = `"${height}", is not a valid height`;
    }
    if(isNaN(weight) || weight < 0 || weight === ''){
        result.innerHTML = `"${weight}", is not a valid weight`;
    }
    else{
        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
        result.innerHTML = `<span> "${bmi}", is your BMI </span>`;

        const Wguide = document.querySelectorAll('#weight-guide p');
        Wguide.forEach(element => {
            console.log(element.id);
            if(bmi <= 18.6){
                document.getElementById('UW').style.backgroundColor = 'red';
                document.getElementById('OW').style.backgroundColor = 'grey';
                document.getElementById('NW').style.backgroundColor = 'grey';
            }
            else if(bmi > 18.6 && bmi <=24.9){
                document.getElementById('NW').style.backgroundColor = 'green';
                document.getElementById('UW').style.backgroundColor = 'grey';
                document.getElementById('OW').style.backgroundColor = 'grey';
            }
            else{
                document.getElementById('OW').style.backgroundColor = 'red';
                document.getElementById('UW').style.backgroundColor = 'grey';
                document.getElementById('NW').style.backgroundColor = 'grey';
            }
        });
    }
});