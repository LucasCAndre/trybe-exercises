function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let liTag = document.createElement('li');
    liTag.innerText = dezDaysList[index];
    document.querySelector('#days').appendChild(liTag);
    if (liTag.innerText === '24' || liTag.innerText === '31') {
      liTag.className = 'day holiday'
    } else if (liTag.innerText === '4' || liTag.innerText === '11' || liTag.innerText === '18') {
      liTag.className = 'day friday'
    } else if (liTag.innerText === '25') {
      liTag.className = 'day holiday friday'
    } else {
      liTag.className = 'day'
    }
  }

let tagBtn = document.createElement('button');
tagBtn.innerText = 'Feriados'
tagBtn.id = 'btn-holiday'
let holidayButton = document.querySelector('.buttons-container').appendChild(tagBtn);

function setColor() {
  let holi = document.querySelectorAll('.holiday');
  for (let i = 0; i < holi.length; i += 1) {
    if (holi[i].style.backgroundColor === 'lightyellow' ){
      holi[i].style.backgroundColor = 'rgb(238,238,238)'
    } else {
      holi[i].style.backgroundColor = 'lightyellow'
    }
  }
}

holidayButton.addEventListener('click', setColor);

function fridayBt(str) {
  let btnTag = document.createElement('button');
  btnTag.innerText = str;
  btnTag.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnTag);
}

fridayBt('Sexta-Feira');

let fridayDays = document.querySelectorAll('.friday');
  let innerTxtFriday = []
  for (i = 0; i < fridayDays.length; i += 1) {
    innerTxtFriday.push(fridayDays[i].innerText)
  };

function setText() {
  for (let index = 0; index < fridayDays.length ; index += 1) {
    if (fridayDays[index].innerText === 'TGI-F') {
      fridayDays[index].innerText = innerTxtFriday[index];
    } else {
      fridayDays[index].innerText = 'TGI-F';
    }
  }
}

document.querySelector('#btn-friday').addEventListener('click', setText);

function zoomDay() {
  event.target.style.fontSize = '35px';
}

function normalSizeFont() {
  event.target.style.fontSize = '20px';
}

document.querySelector('#days').addEventListener('mouseover', zoomDay);
document.querySelector('#days').addEventListener('mouseout', normalSizeFont);

function taskEvent(task) {
  let tagSpam = document.createElement('span');
  tagSpam.innerText = task;
  document.querySelector('.my-tasks').appendChild(tagSpam);
}

taskEvent('Cozinhar');

function taskColor(cor){
  let divTag = document.createElement('div');
  divTag.className = 'task';
  divTag.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(divTag);
}

taskColor('purple');


