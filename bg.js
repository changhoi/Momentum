const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    image.onload = function() {
        body.appendChild(image);
    }
}

function genRandom() {
    return Math.floor(Math.random()*IMG_NUMBER);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();