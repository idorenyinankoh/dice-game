// let x = 2;
// let d = document.querySelector('#dice').getAttribute;


function randomNumb() {
    let dicePosition = Math.floor((Math.random()) * 5) + 1;
    return dicePosition;
}

let img = './images/dice' + randomNumb() + '.png';
let img2 = './images/dice' + randomNumb() + '.png';
document.querySelector('.img1').setAttribute('src', img);

document.querySelector('.img2').setAttribute('src', img2);