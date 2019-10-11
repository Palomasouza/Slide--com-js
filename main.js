let imglist = [
    './img/cap2.png',
    './img/stark].png',
    './img/thor.png',
    './img/viuva.png',
    './img/hulk.png',
    './img/gav.png'
]

let counter = 0;

let corpin = document.querySelector('body');

// img
let img = document.createElement('img');
img.setAttribute('src', imglist[counter]);

// setinha 
let before = document.createElement ('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

// setinha
let next = document.createElement ('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
    console.log(corpin, img);
    corpin.appendChild(before);
    corpin.appendChild(img);
    corpin.appendChild(next);
}

before.addEventListener('click', function(){
    if (counter > 0 )  {
        counter = counter - 1;
        img.setAttribute('src', imglist[counter])
    } else {counter = 7 }
})

next.addEventListener('click', function(){
    if (counter < 7 )  {
        counter = counter + 1;
        img.setAttribute('src', imglist[counter])
    } else {counter = 0 }
    
})

init();
