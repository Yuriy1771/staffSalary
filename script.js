const btn = document.querySelector('#btnCalculate');
let modal = document.querySelector('#modalWindow');
const btnModal = document.querySelector('#btnCalculateInModal');
let close = document.querySelector('#close');
const btnCancel = document.querySelector('#btnCancel');
let dataAboutSalary = document.querySelector('#dataAboutSalary');
let salaryNo = document.querySelector('#salaryNo');
const btnRecalculate = document.querySelector('#btnRecalculate');
//-----------------------------------------------------------------------


btn.onclick = () => {
    checkLets();
    let validResults = validCheck();
    if(validResults === '') {
        modal.style.display = 'block';
        plus();
    }
}

btnModal.onclick = () => {
    modal.style.display = 'none';
    dataAboutSalary.style.display = 'block';
    salaryNo.style.display = 'none';
    btn.style.display = 'none';
    btnRecalculate.style.display = 'block';
}

btnRecalculate.onclick = () => {
    modal.style.display = 'block';
}

btnCancel.onclick = () => {
    modal.style.display = 'none';
}

close.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
        fio.value ='';
    }
}

let fio;
let month;

function checkLets() {
    fio = document.querySelector('#select').value;
    month = document.querySelector('#month').value;
}

function validCheck() {
    if(fio === 'ФИО') {
        return 'Вы не выбрали ФИО!';
    }
    // Тут ошибка не работает валидация
    if(month === 'Месяц') {
        return 'Вы не выбрали месяц!'
    }
    return '';
}

let titleSalary = document.querySelector('#titleSalary');
let titleMonth = document.querySelector('#titleWithMonth');
let titleFIO = document.querySelector('#titleWithFIO');

function plus() {
    // titleSalary.innerHTML += ;
    titleFIO.innerHTML += ' ' + fio;
    titleMonth.innerHTML += ' ' + month;
    return
}