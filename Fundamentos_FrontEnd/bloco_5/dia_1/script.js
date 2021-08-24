document.getElementsByTagName('header')[0].style.backgroundColor = '#62B26A';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#EE9C83'
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#F9DB5E'
let urgentTitle = document.querySelectorAll('.emergency-tasks h3');
for (index = 0; index < urgentTitle.length; index += 1) {
    urgentTitle[index].style.backgroundColor = '#AE72F2'
};

let nonUrgentTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (index = 0; index < nonUrgentTitle.length; index += 1) {
    nonUrgentTitle[index].style.backgroundColor = '#232525'
};
document.getElementById('footer-container').style.backgroundColor = '#173634';