var medidor = document.querySelector('.medidor');
var interval = 2000;
var positions = medidor.getBoundingClientRect();
var mytop = positions.top;
var myleft = positions.left;
var myright = positions.right;

//medidor.setAttribute("margin", "1000");

var contador = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var changePosition = function () {

    mytop = getRandomInt(1000);
    myleft = getRandomInt(1000);
    myright = getRandomInt(1000);
}

changePosition();

setInterval(function () {
    contador++;
}, 1000);



console.log(contador);

medidor.setAttribute('margin-top', getRandomInt(1000));
medidor.setAttribute('margin-rigth', getRandomInt(1000));

console.log(medidor);
console.log(mytop);
console.log(myleft);
console.log(myright); 