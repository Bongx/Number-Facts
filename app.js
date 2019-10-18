//create a variable fot fact

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

//add an event listener
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);


// function getFactAjax() {
//     let number = numberInput.value;

//     //make request to api
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + number);
//     xhr.onload = function () {
//         if (this.status == 200 && number != '') {
//             fact.style.display = 'block';
//             factText.innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// }

function getFactFetch() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                console.log(data);
                fact.style.display = 'block';
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));

}
//Math number
let fact2 = document.querySelector('#fact2');
let factText2 = document.querySelector('#factText2');

let mathInput = document.querySelector('#mathInput');
mathInput.addEventListener('input', getFactFetch2);

function getFactFetch2() {
    let number2 = mathInput.value;
    fetch('http://numbersapi.com/' + number2 + '/math')
        .then(response => response.text())
        .then(data => {
            if (number2 != '') {
                console.log(data);
                fact2.style.display = 'block';
                factText2.innerText = data;
            }
        })
        .catch(err => console.log(err));

}