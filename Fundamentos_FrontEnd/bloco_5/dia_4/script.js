let btnColor = document.createElement('button');
btnColor.className = 'color-btn';
btnColor.innerHTML = 'Bground Color';
btnColor.style.backgroundColor = 'white'
btnColor.style.padding = 0
document.body.appendChild(btnColor);

document.querySelector('.color-btn').addEventListener('click', setColor);

function setColor() {
    let NewColor = '#' + Math.ceil(Math.random() * 999999);
    localStorage.setItem('bgColor', NewColor);
    document.body.style.backgroundColor = localStorage.getItem('bgColor');
}

document.body.style.backgroundColor = localStorage.getItem('bgColor');

let btnFontColor = document.createElement('button');
btnFontColor.className = 'fontcolor-btn';
btnFontColor.innerHTML = 'Letter Color';
btnFontColor.style.backgroundColor = 'white'
btnFontColor.style.padding = 0
document.body.appendChild(btnFontColor);

document.querySelector('.fontcolor-btn').addEventListener('click', setFontColor);

function setFontColor() {
    let NewFontColor = '#' + Math.ceil(Math.random() * 999999);
    localStorage.setItem('fontColor', NewFontColor);
    document.body.style.color = localStorage.getItem('fontColor');
}

document.body.style.color = localStorage.getItem('fontColor');

let btnUp = document.createElement('button');
btnUp.className = 'btn-up';
btnUp.innerHTML = '⬆';
btnUp.style.backgroundColor = 'white'
btnUp.style.marginLeft = '20px'
document.body.appendChild(btnUp);

let btnDown = document.createElement('button');
btnDown.className = 'btn-down';
btnDown.innerHTML = '⬇︎';
btnDown.style.backgroundColor = 'white'
document.body.appendChild(btnDown);


function fontUp () {
    newFontSize = ((parseInt(document.querySelector('p').style.fontSize)) + 2) + 'px';
    localStorage.setItem('font-size', newFontSize);
    document.querySelector('.paragraph').style.fontSize = newFontSize
}

document.querySelector('.btn-up').addEventListener('click', fontUp);

if (document.querySelector('.paragraph').style.fontSize === '') {
    document.querySelector('.paragraph').style.fontSize = '15px';
}


